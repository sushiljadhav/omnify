import React from "react";
import Icon from "../icon/Icon";

function FilterSearch({ placeholder, searchType }) {
	return (
		<div className="flex relative">
			<div className="absolute left-3 top-[5px] flex">
				<Icon src={"search-filter"} mr={"0"}></Icon>
			</div>
			<input
				type="text"
				placeholder={placeholder}
				className="rounded-md w-full min-h-7 bg-gray-50 text-gray-400 py-1 pl-9 pr-4 font-normal text-sm border border-primary"
				name={searchType}
			/>
		</div>
	);
}

export default FilterSearch;
