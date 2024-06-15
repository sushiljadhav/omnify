"use client";
import React, { useEffect, useState, useContext } from "react";
import Summary from "./summary/Summary";
import FilterRow from "./filterrow/FilterRow";
import Table from "./table/Table";
import { watchList } from "@/app/utils/watchlist";
import { FiltersContext } from "@/app/context/filtersContext";
import { selectedFilters } from "@/app/utils/filters";

function Dashboard() {
	const [searchQuery, setSearchQuery] = useState("");
	const [watchListData, setWatchListData] = useState(watchList);
	const [debounceTimeout, setDebounceTimeout] = useState(null);
	const { filters, setFilters } = useContext(FiltersContext);
	const [filteredData, setFilteredData] = useState([]);

	/**
	 * bind the user input query
	 * @param {'search query'} query
	 */
	const searchQueryHandler = (query) => {
		setSearchQuery(query);

		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		if (!query) {
			// If the query is empty, reset the table to show all data
			setWatchListData(watchList);
			return;
		}

		const timeoutId = setTimeout(() => {
			const filteredData = watchListData.rows.filter((row) =>
				row?.payer?.toLowerCase().startsWith(query.toLowerCase())
			);

			setWatchListData((prev) => ({
				...prev,
				rows: filteredData,
			}));
		}, 1000);

		setDebounceTimeout(timeoutId);
	};

	const columnHandler = (columns) => {
		if (columns.length === 0) {
			// If columns are empty, return the original watchListData
			setWatchListData(watchList);
		} else {
			// Otherwise, update the headers and rows based on the columns
			setWatchListData((prev) => {
				const updatedHeaders = prev.headers.filter(
					(header) => !columns?.includes(header.key) // Assuming header.key is used for comparison
				);

				const updatedRows = prev.rows.map((row) => {
					const updatedRow = { ...row };
					columns.forEach((col) => {
						delete updatedRow[col];
					});
					return updatedRow;
				});

				return {
					headers: updatedHeaders,
					rows: updatedRows,
				};
			});
		}
	};

	const payerFilter = () => {
		const payerNamesFilter = filters.payerData;

		if (payerNamesFilter.length === 0) {
			return [];
		}

		const filteredRows = watchListData.rows.filter((row) => {
			return (
				payerNamesFilter.length === 0 ||
				payerNamesFilter.includes(row.payer)
			);
		});
		console.log("Payer Filtered Data:", filteredRows);
		return filteredRows;
	};

	const scheduleFilter = (payerFilteredRows) => {
		const fromDate = new Date(filters.schedule.from);
		const toDate = new Date(filters.schedule.to);

		if (!fromDate || !toDate) {
			return payerFilteredRows; // If dates are not set, return payer filtered rows
		}

		const filteredRows = payerFilteredRows.filter((row) => {
			const rowDataDate = new Date(row.schedule); // Assuming 'schedule' is the key for date in row object
			return rowDataDate >= fromDate && rowDataDate <= toDate;
		});
		console.log("Schedule Filtered Data:", filteredRows);
		return filteredRows;
	};

	const servicesNameFilter = () => {
		const servicesFilter = filters.servicesNames;

		// Check if servicesFilter is empty
		if (servicesFilter.length === 0) {
			return [];
		}

		const filteredRows = watchListData.rows.filter((row) => {
			return servicesFilter.includes(row.services);
		});

		console.log("Services Name Filtered Data:", filteredRows);
		return filteredRows;
	};

	const servicesByTagFilter = () => {
		const serviceTypeFilter =
			filters.servicesByTagName.serviceType.name.toLowerCase();
		const serviceStatusFilter =
			filters.servicesByTagName.serviceStatus.name.toLowerCase();

		// Check if both serviceType and serviceStatus filters are empty
		if (!serviceTypeFilter && !serviceStatusFilter) {
			return [];
		}

		const filteredRows = watchListData.rows.filter((row) => {
			const rowServiceType = row.servicesType.toLowerCase();
			const rowStatus = row.serviceStatus.toLowerCase();
			if (serviceTypeFilter && serviceStatusFilter) {
				return (
					rowServiceType === serviceTypeFilter &&
					rowStatus === serviceStatusFilter
				);
			}

			if (serviceTypeFilter) {
				return rowServiceType === serviceTypeFilter;
			}

			if (serviceStatusFilter) {
				return rowStatus === serviceStatusFilter;
			}

			return true;
		});

		console.log("Services By Tag Filtered Data:", filteredRows);
		return filteredRows;
	};

	/** on Reset or Apply button Click */

	const onButtonClick = (whichButton) => {
		if (whichButton === "apply") {
			let filteredRows = payerFilter();

			if (filteredRows.length === 0) {
				console.log(
					"No rows matched payer filter. Checking other filters..."
				);

				const scheduleFilteredRows = scheduleFilter(watchListData.rows);
				if (scheduleFilteredRows.length > 0) {
					filteredRows = scheduleFilteredRows;
					setFilteredData(filteredRows);
				} else {
					const servicesNameFilteredRows = servicesNameFilter(
						watchListData.rows
					);
					if (servicesNameFilteredRows.length > 0) {
						filteredRows = servicesNameFilteredRows;
						setFilteredData(filteredRows);
					} else {
						const servicesByTagFilteredRows = servicesByTagFilter(
							watchListData.rows
						);
						if (servicesByTagFilteredRows.length > 0) {
							filteredRows = servicesByTagFilteredRows;
							setFilteredData(filteredRows);
						}
					}
				}
			} else {
				let combinedFilteredRows = filteredRows;
				combinedFilteredRows = scheduleFilter(combinedFilteredRows);
				combinedFilteredRows = servicesNameFilter(combinedFilteredRows);
				const servicesFilteredRows =
					servicesNameFilter(combinedFilteredRows);

				if (servicesFilteredRows.length > 0) {
					combinedFilteredRows =
						servicesByTagFilter(servicesFilteredRows); // Apply services by tag filter
					if (combinedFilteredRows.length > 0) {
						combinedFilteredRows = combinedFilteredRows;
					} else {
						combinedFilteredRows = servicesFilteredRows;
					}
				} else {
					combinedFilteredRows =
						servicesByTagFilter(combinedFilteredRows);
				}

				if (combinedFilteredRows.length > 0) {
					filteredRows = combinedFilteredRows;
				}

				console.log("Final Filtered Rows:", filteredRows);

				setFilteredData(filteredRows);
			}
		} else {
			setFilteredData([]);
			setFilters(selectedFilters);
		}
	};

	useEffect(() => {
		return () => {
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}
		};
	}, [debounceTimeout]);

	return (
		<div className="bg-secondary min-h-screen pt-3.5shadow-sm rounded-md m-2 mr-0">
			<h3 className="py-3.5 mb-3 font-semibold text-textColor text-lg px-4">
				Waitlist
			</h3>
			<Summary />
			<FilterRow
				onSearchQuery={searchQueryHandler}
				tableHeader={watchList?.headers}
				onTableColumnChange={columnHandler}
				onButtonClick={onButtonClick}
				filteredChips={filteredData}
			></FilterRow>
			<Table data={watchListData} />
		</div>
	);
}

export default Dashboard;
