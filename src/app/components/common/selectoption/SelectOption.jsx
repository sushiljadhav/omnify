import React from "react";
import DropDownList from "../dropdownlist/DropDownList";

function SelectOption({
	options,
	onDropDownChanges,
	selected,
	onDropDownCloseHandler,
}) {
	return (
		<div
			className="p-1 bg-secondary z-20 absolute left-0 top-10 border rounded-md w-full shadow-smStrong h-auto"
			style={{ borderColor: "#E4E4E7" }}
		>
			<DropDownList
				lists={options}
				onDropDownChanges={onDropDownChanges}
				selected={selected}
				onDropDownCloseHandler={onDropDownCloseHandler}
			></DropDownList>
		</div>
	);
}

export default SelectOption;
