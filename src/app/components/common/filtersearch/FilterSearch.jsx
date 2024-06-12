import React, { useEffect, useState } from "react";
import Icon from "../icon/Icon";

function FilterSearch({ placeholder, searchType, onSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			onSearch(searchTerm);
		}
	};

	const handleIconClick = () => {
		onSearch(searchTerm);
	};

	return (
		<div className="flex relative">
			<div
				className="absolute left-3 top-[5px] flex cursor-pointer"
				onClick={handleIconClick}
			>
				<Icon src={"search-filter"} mr={"0"}></Icon>
			</div>
			<input
				type="text"
				placeholder={placeholder}
				className="rounded-md w-full min-h-7 bg-gray-50 text-gray-400 py-1 pl-9 pr-4 font-normal text-sm border border-primary"
				name={searchType}
				onChange={handleInputChange}
				onKeyUp={handleKeyUp}
			/>
		</div>
	);
}

export default FilterSearch;
