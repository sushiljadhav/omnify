import React, { useState } from "react";
import SelectOption from "../selectoption/SelectOption";
import Icon from "../icon/Icon";

function DropDownBox({ options, selected, placeholder, onDropDownChanges }) {
	const [showDropDown, setShowDropDown] = useState(false);

	const dropDownClickHandler = (showDropDown) => {
		setShowDropDown(!showDropDown);
	};

	const dropDownCloseHandler = (closeSelect) => {
		setShowDropDown(closeSelect);
	};

	return (
		<div
			className="border shadow-filterBox bg-secondary py-2 px-3 relative rounded-md mb-0"
			style={{
				borderColor: "#E4E4E7",
			}}
		>
			<div
				className="flex justify-between items-center cursor-pointer"
				onClick={() => {
					dropDownClickHandler(showDropDown);
				}}
			>
				<span className="text-sm font-normal text-textColor inline-block mr-2 max-w-[298px] w-full">
					{placeholder}
				</span>
				<Icon src={"chevron-down"} width="20" height="20" />
			</div>
			{showDropDown ? (
				<SelectOption
					options={options}
					onDropDownChanges={onDropDownChanges}
					selected={selected}
					onDropDownCloseHandler={dropDownCloseHandler}
				/>
			) : null}
		</div>
	);
}

export default DropDownBox;
