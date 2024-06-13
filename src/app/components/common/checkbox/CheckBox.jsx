import React, { useState, useEffect } from "react";

function CheckBox({ checkedHandler, col, checked }) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const onInputChecked = () => {
		setIsChecked(!isChecked);
		checkedHandler(!isChecked, col);
	};

	return (
		<div className="flex items-center">
			<input
				id="checkbox-all-search"
				type="checkbox"
				className="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-checkBoxBorderColor rounded focus:ring-blue-500 shadow-checkBoxShadow cursor-pointer"
				checked={isChecked}
				onChange={() => {
					onInputChecked(col);
				}}
			/>
			<label htmlFor="checkbox-all-search" className="sr-only">
				checkbox
			</label>
		</div>
	);
}

export default CheckBox;
