"use client";
import React, { useState } from "react";
import { optionsFrom, optionsTo } from "../../../../utils/dateSettings";
import DateUI from "../../date/DateUI";
import { showOrderOptions } from "../../../../utils/showOrderOptions";
import DropDownBox from "../../dropdownbox/DropDownBox";
import SelectOption from "../../selectoption/SelectOption";

function Schedule() {
	const [showOrderFor, setShowOrderFor] = useState(false);

	return (
		<>
			<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
				Show orders for
			</span>
			<SelectOption
				placeholder={"All time"}
				selected={"All time"}
				options={showOrderOptions}
			></SelectOption>
			<div className="flex justify-between items-center gap-[19px]">
				<DateUI options={optionsFrom} title={"From"}></DateUI>
				<DateUI options={optionsTo} title={"To"}></DateUI>
			</div>
		</>
	);
}

export default Schedule;
