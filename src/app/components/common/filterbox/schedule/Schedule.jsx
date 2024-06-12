"use client";
import React, { useState, useContext, useEffect } from "react";
import { optionsFrom, optionsTo } from "../../../../utils/dateSettings";
import DateUI from "../../date/DateUI";
import dayjs from "dayjs";
import { showOrderOptions } from "../../../../utils/showOrderOptions";
import DropDownBox from "../../dropdownbox/DropDownBox";
import { FiltersContext } from "@/app/context/filtersContext";
import { selectedFilters } from "../../../../utils/filters";
import quarterOfYear from "dayjs/plugin/quarterOfYear";

dayjs.extend(quarterOfYear);

const getDateRange = (key) => {
	const now = dayjs();
	let fromDate, toDate;

	switch (key) {
		case "last30Days":
			fromDate = now.subtract(30, "day").format("DD MMM YYYY");
			toDate = now.format("DD MMM YYYY");
			break;
		case "thisMonth":
			fromDate = now.startOf("month").format("DD MMM YYYY");
			toDate = now.endOf("month").format("DD MMM YYYY");
			break;
		case "lastMonth":
			fromDate = now
				.subtract(1, "month")
				.startOf("month")
				.format("DD MMM YYYY");
			toDate = now
				.subtract(1, "month")
				.endOf("month")
				.format("DD MMM YYYY");
			break;
		case "thisQuarter":
			fromDate = now.startOf("quarter").format("DD MMM YYYY");
			toDate = now.endOf("quarter").format("DD MMM YYYY");
			break;
		case "twoQuartersAgo":
			const twoQuartersAgo = now.subtract(2, "quarter");
			fromDate = twoQuartersAgo.startOf("quarter").format("DD MMM YYYY");
			toDate = twoQuartersAgo.endOf("quarter").format("DD MMM YYYY");
			break;
		case "thisYear":
			fromDate = now.startOf("year").format("DD MMM YYYY");
			toDate = now.endOf("year").format("DD MMM YYYY");
			break;
		case "lastYear":
			fromDate = now
				.subtract(1, "year")
				.startOf("year")
				.format("DD MMM YYYY");
			toDate = now
				.subtract(1, "year")
				.endOf("year")
				.format("DD MMM YYYY");
			break;
		default:
			fromDate = null;
			toDate = null;
			break;
	}

	return { fromDate, toDate };
};

function Schedule() {
	const { filters, setFilters } = useContext(FiltersContext);
	const [orderForSelected, setOrderForSelected] = useState(() => {
		// Check if schedule data exists in filters, use it if available, else use selectedFilters
		return filters.schedule ? filters.schedule : selectedFilters.schedule;
	});

	const [fromDate, setFromDate] = useState(
		() => filters.schedule?.from || ""
	);
	const [toDate, setToDate] = useState(() => filters.schedule?.to || "");
	const [dateError, setDateError] = useState("");
	const [disabledCalendar, setDisabledCalendar] = useState(() => {
		return filters.schedule.showOrderFor.key === "all" ||
			filters.schedule.showOrderFor.key === "custom"
			? false
			: true;
	});
	const [showFrom, setShowFrom] = useState(false);
	const [showTo, setShowTo] = useState(false);

	// Function to handle dropdown selection

	console.log("orderFor", disabledCalendar);

	const dropSelectHandler = (item) => {
		const { fromDate, toDate } = getDateRange(item.key);

		if (item.key !== "all" && item.key !== "custom") {
			setDisabledCalendar(true);
		} else {
			setDisabledCalendar(false);
			setFromDate("");
			setToDate("");
		}

		if (fromDate !== null && toDate !== null) {
			// Update the selected date range and related state
			setOrderForSelected((prev) => ({
				...prev,
				showOrderFor: {
					key: item.key,
					name: item.name,
				},
				from: fromDate || "",
				to: toDate || "",
			}));

			setFromDate(fromDate);
			setToDate(toDate);
			setShowFrom(false);
			setShowTo(false);
			setDateError("");
		} else {
			setOrderForSelected((prev) => ({
				...prev,
				showOrderFor: {
					key: item.key,
					name: item.name,
				},
				from: "",
				to: "",
			}));
		}
	};

	// Function to validate dates
	const validateDates = (from, to) => {
		if (!from || !to) {
			setDateError("Please select both From and To dates.");
			return false;
		} else if (dayjs(from) > dayjs(to)) {
			setDateError("From date cannot be later than To date.");
			return false;
		} else {
			setDateError("");
			return true;
		}
	};

	// Function to handle From date change
	const onHandleFromDateChange = (date) => {
		const formattedDate = dayjs(date).format("MMM DD, YYYY");
		setFromDate(formattedDate);
		if (!toDate || validateDates(formattedDate, toDate)) {
			setOrderForSelected((prev) => ({
				...prev,
				from: formattedDate,
			}));
		}
	};

	// Function to handle To date change
	const onHandleToDateChange = (date) => {
		const formattedDate = dayjs(date).format("MMM DD, YYYY");
		setToDate(formattedDate);
		if (!fromDate || validateDates(fromDate, formattedDate)) {
			setOrderForSelected((prev) => ({
				...prev,
				to: formattedDate,
			}));
		}
	};

	// Effect to update FiltersContext when fromDate and toDate are selected
	useEffect(() => {
		if (fromDate && toDate) {
			setFilters((prevFilters) => ({
				...prevFilters,
				schedule: {
					...orderForSelected,
				},
			}));
		}
	}, [fromDate, toDate, orderForSelected, setFilters]);

	console.log(orderForSelected);
	return (
		<>
			<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
				Show orders for
			</span>

			<DropDownBox
				options={showOrderOptions}
				selected={orderForSelected?.showOrderFor?.key}
				placeholder={orderForSelected?.showOrderFor?.name}
				onDropDownChanges={dropSelectHandler}
			></DropDownBox>

			<div className="flex justify-between items-center gap-[19px] mt-5">
				<DateUI
					options={optionsFrom}
					title={"From"}
					handleChange={onHandleFromDateChange}
					value={fromDate}
					disabled={disabledCalendar}
					show={showFrom}
					setShow={setShowFrom}
				></DateUI>
				<DateUI
					options={optionsTo}
					title={"To"}
					handleChange={onHandleToDateChange}
					value={toDate}
					disabled={disabledCalendar}
					show={showTo}
					setShow={setShowTo}
				></DateUI>
			</div>
			{dateError && (
				<p className="text-red-500 text-sm mt-2">{dateError}</p>
			)}
		</>
	);
}

export default Schedule;
