"use client";
import React, { useEffect, useState, useContext } from "react";
import Summary from "./summary/Summary";
import FilterRow from "./filterrow/FilterRow";
import Table from "./table/Table";
import { watchList } from "@/app/utils/watchlist";
import { FiltersContext } from "@/app/context/filtersContext";

function Dashboard() {
	const [searchQuery, setSearchQuery] = useState("");
	const [watchListData, setWatchListData] = useState(watchList);
	const [debounceTimeout, setDebounceTimeout] = useState(null);
	const { filters, setFilters } = useContext(FiltersContext);

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
		const filteredRows = watchListData.rows.filter((row) => {
			// Example filtering condition based on payer data
			return filters.payerData.includes(row.payer);
		});
		console.log("Payer Filtered Data:", filteredRows);
		return filteredRows; // Return true if the row passes all filters
	};

	const schedule = () => {
		const filteredData = watchListData.rows.filter((row) => {
			// Filter based on schedule
			const fromDate = new Date(filters.schedule.from);
			const toDate = new Date(filters.schedule.to);

			if (fromDate && toDate) {
				const rowDataDate = new Date(row.schedule); // Assuming 'date' is the key for date in row object

				return rowDataDate >= fromDate && rowDataDate <= toDate;
			}

			return true; // Return true to include all rows if dates are not set in the filter
		});

		return filteredData;
	};

	const servicesName = () => {
		const filteredData = watchListData.rows.filter((row) => {
			// Filter based on servicesNames
			const servicesFilter = filters.servicesNames;

			if (servicesFilter.length > 0) {
				return servicesFilter.includes(row.serviceName); // Assuming 'serviceName' is the key for service name in row object
			}

			return true; // Return true to include all rows if servicesNames filter is not set
		});

		return filteredData;
	};

	const servicesByTag = () => {
		const filteredData = watchListData.rows.filter((row) => {
			// Filter based on servicesByTagName
			const serviceTypeFilter = filters.servicesByTagName.serviceType;
			const serviceStatusFilter = filters.servicesByTagName.serviceStatus;

			// Check if both serviceType and serviceStatus filters are set
			if (serviceTypeFilter.key && serviceStatusFilter.key) {
				return (
					row.servicesType === serviceTypeFilter.key &&
					row.serviceStatus === serviceStatusFilter.key
				);
			}

			// Check if only serviceType filter is set
			if (serviceTypeFilter.key) {
				return row.servicesType === serviceTypeFilter.key;
			}

			// Check if only serviceStatus filter is set
			if (serviceStatusFilter.key) {
				return row.serviceStatus === serviceStatusFilter.key;
			}

			return true; // Return true to include all rows if no serviceType or serviceStatus filter is set
		});

		return filteredData;
	};

	/** on Reset or Apply button Click */

	const onButtonClick = (whichButton) => {
		if (whichButton === "apply") {
			const payerData = payerFilter();
			const scheduledDate = schedule();
			const services = servicesName();
			const servicesByTagName = servicesByTag();

			console.log("Final Filtered Rows:", finalFilteredRows);
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
		<div className="bg-secondary min-h-screen pt-3.5 px-4 shadow-sm rounded-md m-2 mr-0">
			<h3 className="py-3.5 mb-3 font-semibold text-textColor text-lg">
				Waitlist
			</h3>
			<Summary />
			<FilterRow
				onSearchQuery={searchQueryHandler}
				tableHeader={watchList?.headers}
				onTableColumnChange={columnHandler}
				onButtonClick={onButtonClick}
			></FilterRow>
			<Table data={watchListData} />
		</div>
	);
}

export default Dashboard;
