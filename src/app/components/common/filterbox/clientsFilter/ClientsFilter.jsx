import React, { useContext, useState, useEffect } from "react";
import ClientLists from "../../clientlists/ClientLists";
import FilterSearch from "../../filtersearch/FilterSearch";
import { watchList } from "../../../../utils/watchlist";
import { FiltersContext } from "../../../../context/filtersContext";

function ClientsFilter() {
	const { filters, setFilters } = useContext(FiltersContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [displayedList, setDisplayedList] = useState([]);

	useEffect(() => {
		// If no search term, show the checked result list from the filter array
		if (!searchTerm) {
			setDisplayedList(filters.payerData);
		}
	}, [filters.payerData, searchTerm]);

	const filterSearchData = (searchTerm) => {
		const filteredData = watchList.rows
			.filter((row) =>
				row.payer.toLowerCase().startsWith(searchTerm.toLowerCase())
			)
			.sort((a, b) => a.payer.localeCompare(b.payer))
			.slice(0, 10);

		const sortedData = filteredData.sort((a, b) => {
			const isASelected = filters.payerData.includes(a.payer);
			const isBSelected = filters.payerData.includes(b.payer);

			if (isASelected && !isBSelected) return -1;
			if (!isASelected && isBSelected) return 1;
			return 0;
		});

		return sortedData.map((row) => row.payer);
	};

	const onSearchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
		const payer = searchTerm
			? filterSearchData(searchTerm)
			: filters.payerData;
		setDisplayedList(payer);
	};

	console.log("payer", filters);

	return (
		<div className="flex flex-col gap-3">
			<FilterSearch
				placeholder={"Search Payer or attendee name"}
				searchType={"clientSearch"}
				onSearch={onSearchHandler}
			/>
			<div>
				<ClientLists
					lists={displayedList}
					searchTerms={searchTerm}
					keyElement="payerData"
				/>
			</div>
		</div>
	);
}

export default ClientsFilter;
