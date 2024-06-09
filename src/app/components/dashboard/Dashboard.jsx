"use client";
import React, { useState } from "react";
import Summary from "./summary/Summary";
import FilterRow from "./filterrow/FilterRow";
import Table from "./table/Table";

function Dashboard() {
	const [searchQuery, setSearchQuery] = useState("");

	/**
	 * bind the user input query
	 * @param {'search query'} query
	 */
	const searchQueryHandler = (query) => {
		setSearchQuery(query);
	};

	return (
		<div className="bg-secondary min-h-screen pt-3.5 px-4 pb-6 shadow-sm rounded-md m-2 mr-0">
			<h3 className="py-3.5 mb-3 font-semibold text-textColor text-lg">
				Waitlist
			</h3>
			<Summary />
			<FilterRow onSearchQuery={searchQueryHandler}></FilterRow>
			<Table />
		</div>
	);
}

export default Dashboard;
