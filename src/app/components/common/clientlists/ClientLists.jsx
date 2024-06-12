import React, { useContext } from "react";
import { FiltersContext } from "../../../context/filtersContext";

function ClientLists({ lists, searchTerms }) {
	const { filters, setFilters } = useContext(FiltersContext);

	const handleCheckboxChange = (client) => {
		setFilters((prevFilters) => {
			const updatedPayerData = prevFilters.payerData.includes(client)
				? prevFilters.payerData.filter((item) => item !== client)
				: [...prevFilters.payerData, client];

			return { ...prevFilters, payerData: updatedPayerData };
		});
	};

	const List = () => {
		return lists.map((list, index) => (
			<li key={index} className="flex w-full items-center gap-2">
				<input
					type="checkbox"
					name="client"
					className="w-3.5 h-3.5 border border-gray-200"
					checked={filters.payerData.includes(list)}
					onChange={() => handleCheckboxChange(list)}
				/>
				<p className="text-sm font-normal text-tableDataColor">
					{list}
				</p>
				<p className="px-2 py-0.5 bg-primary text-xxs text-textColor rounded">
					Payer
				</p>
			</li>
		));
	};

	return (
		<>
			{lists.length > 0 && searchTerms.length > 0 ? (
				<h6 className="text-textSecondaryColor text-sm font-normal">
					Showing {lists.length} results matching {searchTerms}
				</h6>
			) : null}
			<ul className="flex flex-col gap-2 mt-3">
				<List />
			</ul>
		</>
	);
}

export default ClientLists;
