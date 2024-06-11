"use client";
import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import Icon from "../icon/Icon";

function DateUI({ options, title }) {
	const [showFrom, setFromShow] = useState(false);
	const [showTo, setToShow] = useState(false);

	const [selectedFromDate, setSelectedFromDate] = useState(undefined);
	const [selectedToDate, setSelectedToDate] = useState(undefined);

	const handleFromChange = (selectedDate) => {
		const dateObj = new Date(selectedDate);
		const formattedDate = dateObj.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});
		setSelectedFromDate(formattedDate);
	};

	const handleToChange = (selectedDate) => {
		const dateObj = new Date(selectedDate);
		const formattedDate = dateObj.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});
		setSelectedToDate(formattedDate);
	};

	const handleFromClose = (state) => {
		setFromShow(state);
	};

	const handleToClose = (state) => {
		setToShow(state);
	};

	return (
		<div className="flex flex-col gap-1.5 max-w-[163px]">
			<span className="text-xs text-textColor font-medium">{title}</span>
			<div className="relative">
				<Datepicker
					options={options}
					onChange={handleFromChange}
					show={showFrom}
					setShow={handleFromClose}
				>
					<div
						className="flex items-center min-h-8 shadow-xs border rounded-md px-4 relative pl-10"
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
							value={selectedFromDate}
							onFocus={() => setFromShow(true)}
							readOnly
						/>
					</div>
				</Datepicker>
			</div>
		</div>
	);
}

export default DateUI;
