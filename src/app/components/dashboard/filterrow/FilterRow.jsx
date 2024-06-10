"use client";
import React, { useEffect, useState } from "react";
import FilterButton from "../../common/filterbutton/FilterButton";
import SearchBar from "../../common/searchbar/SearchBar";
import FunctionalButtons from "../../common/functionalbuttons/FunctionalButtons";
import FilterBox from "../../common/filterbox/FilterBox";

function FilterRow({ onSearchQuery }) {
	const [whichButton, setWhichButton] = useState("");

	/**
	 * check which functional button click by user
	 * @param {download | refresh | columns} button
	 */
	const functionalButtonHandler = (button) => {
		setWhichButton(button);
	};

	return (
		<div className="flex items-center justify-between mb-3 pb-3 relative">
			<div className="max-w-[102px] w-full">
				<FilterButton></FilterButton>
				<FilterBox />
			</div>
			<div className="flex items-center max-w-[386px] w-full ml-auto gap-4">
				<SearchBar onSearchQuery={onSearchQuery} />
				<FunctionalButtons
					onFunctionalButtonClick={functionalButtonHandler}
					title={"refresh"}
					url={"refresh-ccw"}
				/>
				<FunctionalButtons
					onFunctionalButtonClick={functionalButtonHandler}
					title={"columns"}
					url={"columns-icon"}
				/>
				<FunctionalButtons
					onFunctionalButtonClick={functionalButtonHandler}
					title={"download"}
					url={"download"}
				/>
			</div>
		</div>
	);
}

export default FilterRow;
