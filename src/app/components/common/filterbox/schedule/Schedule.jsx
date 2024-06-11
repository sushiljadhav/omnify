"use client";
import React, { useState } from "react";
import { optionsFrom, optionsTo } from "../../../../utils/dateSettings";
import DateUI from "../../date/DateUI";
import { showOrderOptions } from "../../../../utils/showOrderOptions";
import DropDownBox from "../../dropdownbox/DropDownBox";
import SelectOption from "../../selectoption/SelectOption";
import { selectedFilters } from "../../../../utils/filters";

function Schedule() {
	const [orderForSelected, setOrderForSelected] = useState({
		...selectedFilters,
	});

	const dropSelectHandler = (item) => {
		setOrderForSelected((prev) => ({
			...prev,
			schedule: {
				...prev.schedule,
				showOrderFor: item.name,
			},
		}));
	};

	console.log(orderForSelected);
	return (
		<>
			<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
				Show orders for
			</span>

			<DropDownBox
				options={showOrderOptions}
				placeholder={orderForSelected.schedule.showOrderFor}
				onDropDownChanges={dropSelectHandler}
			></DropDownBox>

			<div className="flex justify-between items-center gap-[19px]">
				<DateUI options={optionsFrom} title={"From"}></DateUI>
				<DateUI options={optionsTo} title={"To"}></DateUI>
			</div>
		</>
	);
}

export default Schedule;
