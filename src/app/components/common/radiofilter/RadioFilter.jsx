import React from "react";

function RadioFilter({ label, radioType, name }) {
	return (
		<div className="flex max-w-[158px] w-full items-center">
			<input
				type="radio"
				name={name ? name : "radioDefault"}
				id={radioType}
				className="w-4 h-4 border custom-radio  border-tableBorderColor mr-2 focus:ring-radio"
			/>
			<label
				htmlFor={radioType}
				className="text-sm text-textColor font-normal"
			>
				{label}
			</label>
		</div>
	);
}

export default RadioFilter;
