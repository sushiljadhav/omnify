import React, { useState } from "react";
import SelectOption from "../selectoption/SelectOption";
import Icon from "../icon/Icon";

function DropDownBox({ options, selected, placeholder }) {
	const [showDropDown, setShowDropDown] = useState(true);
	return (
		<div
			className="border shadow-filterBox bg-secondary py-2 px-3 relative rounded-md mb-0"
			style={{
				borderColor: "#E4E4E7",
			}}
		>
			<div className="flex justify-between items-center cursor-pointer">
				<span className="text-sm font-normal text-textColor inline-block mr-2 max-w-[298px] w-full">
					{placeholder}
				</span>
				<Icon src={"chevron-down"} width="20" height="20" />
			</div>
			{showDropDown ? <SelectOption options={options} /> : null}
		</div>
	);
}

export default DropDownBox;
