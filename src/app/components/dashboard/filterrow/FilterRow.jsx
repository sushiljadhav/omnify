"use client";
import React, { useEffect, useState } from "react";
import AddFilterButton from "../../common/addfilterbutton/AddFilterButton";
import SearchBar from "../../common/searchbar/SearchBar";
import FunctionalButtons from "../../common/functionalbuttons/FunctionalButtons";
import FilterBox from "../../common/filterbox/FilterBox";
import ColumnBox from "../../common/columnbox/ColumnBox";
import Image from "next/image";

function FilterRow({
	onSearchQuery,
	tableHeader,
	onTableColumnChange,
	onButtonClick,
	filteredChips,
}) {
	const [whichButton, setWhichButton] = useState("");
	const [showFilter, setShowFilter] = useState(false);
	const [showColumnBox, setShowColumnBox] = useState(false);
	const [filterChipsData, setFilterChipsData] = useState(filteredChips);

	const showFilterHandler = (isShow) => {
		setShowFilter(isShow);
	};

	/**
	 * check which functional button click by user
	 * @param {download | refresh | columns} button
	 */
	const functionalButtonHandler = (buttonType) => {
		setWhichButton(buttonType);
		if (buttonType === "columns") {
			setShowColumnBox((prevState) => !prevState);
		}
	};

	const chipClickHandler = () => {
		const updatedItems = items.filter((item) => item !== clickedItem);

		// Update the state with the new array
		setFilterChipsData(updatedItems);
	};

	useEffect(() => {
		setFilterChipsData(filteredChips);
	}, [filteredChips]);

	return (
		<div className="flex items-center justify-between mb-3 pb-3 relative px-4 flex-wrap lg:gap-3">
			<div className="max-w-[102px] w-full">
				<AddFilterButton
					isFilterShow={showFilter}
					onFilterShowHandler={showFilterHandler}
				></AddFilterButton>
				{showFilter ? (
					<FilterBox onButtonClick={onButtonClick} />
				) : null}
			</div>
			<div className="flex items-center max-w-[700px] w-full overflow-auto chips-list ml-4">
				<ul className="flex items-center gap-1 justify-between">
					{filterChipsData?.map((item, index) => {
						return (
							<li
								key={item.index}
								className="bg-primary py-1 px-2 flex items-center rounded-md min-w-[78px] w-full"
							>
								<span className="font-medium text-textThirdColor text-sm">
									{item.payer.split(" ")[0]}
								</span>
								<Image
									src={"../close.svg"}
									width={26}
									height={28}
									alt="close"
									className="flex ml-1 cursor-pointer"
									onClick={() => chipClickHandler(item)}
								></Image>
							</li>
						);
					})}
				</ul>
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
					{showColumnBox && (
						<ColumnBox
							columns={tableHeader}
							onTableColumnChange={onTableColumnChange}
						></ColumnBox>
					)}
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
