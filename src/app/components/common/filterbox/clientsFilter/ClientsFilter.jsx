import React from "react";
import ClientLists from "../../clientlists/ClientLists";
import FilterSearch from "../../filtersearch/FilterSearch";

function ClientsFilter() {
	return (
		<div className="flex flex-col gap-3">
			<FilterSearch
				placeholder={"Search Payer or attendee name"}
				searchType={"clientSearch"}
			/>
			<div>
				<ClientLists />
			</div>
		</div>
	);
}

export default ClientsFilter;
