"use client";
import React, { useEffect, useState } from "react";
import AddFilterButton from "../../common/addfilterbutton/AddFilterButton";
import SearchBar from "../../common/searchbar/SearchBar";
import FunctionalButtons from "../../common/functionalbuttons/FunctionalButtons";
import FilterBox from "../../common/filterbox/FilterBox";
import ColumnBox from "../../common/columnbox/ColumnBox";

function FilterRow({ onSearchQuery }) {
	const [whichButton, setWhichButton] = useState("");
	const [showFilter, setShowFilter] = useState(false);

	const showFilterHandler = (isShow) => {
		setShowFilter(isShow);
	};

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
				<AddFilterButton
					isFilterShow={showFilter}
					onFilterShowHandler={showFilterHandler}
				></AddFilterButton>
				{showFilter ? <FilterBox /> : null}
			</div>
			<div className="flex items-center max-w-[386px] w-full ml-auto gap-4">
				<SearchBar onSearchQuery={onSearchQuery} />
				<div>
					<FunctionalButtons
						onFunctionalButtonClick={functionalButtonHandler}
						title={"refresh"}
						url={"refresh-ccw"}
					/>
				</div>
				<div>
					<FunctionalButtons
						onFunctionalButtonClick={functionalButtonHandler}
						title={"columns"}
						url={"columns-icon"}
					/>
					{/* <ColumnBox></ColumnBox> */}
				</div>
				<div>
					<FunctionalButtons
						onFunctionalButtonClick={functionalButtonHandler}
						title={"download"}
						url={"download"}
					/>
				</div>
			</div>
		</div>
	);
}

export default FilterRow;
