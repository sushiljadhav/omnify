"use client";
import React, { useEffect, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import Icon from "../icon/Icon";

function DateUI({
	options,
	title,
	handleChange,
	value,
	disabled,
	show,
	setShow,
}) {
	const [selectedDate, setSelectedDate] = useState(value);

	const onHandleChange = (selectedDate) => {
		const dateObj = new Date(selectedDate);
		const formattedDate = dateObj.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});
		setSelectedDate(formattedDate);
		handleChange(formattedDate);
		setShow(false);
	};

	const handleClose = (state) => {
		setShow(state);
	};

	useEffect(() => {
		setSelectedDate(value);
	}, [value]);

	return (
		<div className="flex flex-col gap-1.5 max-w-[163px]">
			<span className="text-xs text-textColor font-medium">{title}</span>
			<div className="relative">
				<Datepicker
					options={options}
					onChange={onHandleChange}
					show={show}
					setShow={handleClose}
				>
					<div
						className={`flex items-center min-h-8 shadow-xs border rounded-md px-4 relative pl-10 ${
							disabled ? "opacity-75 pointer-events-none" : ""
						}`}
						style={{
							borderColor: "#E2E8F0",
						}}
					>
						<div className="flex items-center absolute left-4 top-[5px] w-4 h-4">
							<Icon src={"calendar-filter"} mr={"0"} />
						</div>
						<input
							type="text"
							className="max-w-[107px] w-full text-sm font-normal text-dateColor cursor-pointer"
							placeholder="Pick a date"
							value={selectedDate}
							onFocus={() => setShow(true)}
							readOnly
							disabled={disabled}
						/>
					</div>
				</Datepicker>
			</div>
		</div>
	);
}

export default DateUI;
