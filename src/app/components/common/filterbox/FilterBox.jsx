import React, { useState } from "react";
import { showOrderOptions } from "../../../utils/showOrderOptions";
import Datepicker from "tailwind-datepicker-react";
import Icon from "../icon/Icon";

const optionsFrom = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-secondary p-0",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "!font-sm !font-normal leading-5 !hover:text-zinc-900",
		disabledText: "!text-zinc-400 !font-sm !font-normal leading-5",
		input: "",
		inputIcon: "",
		selected: "!text-zinc-900 !font-normal !hover:text-zinc-900 !font-sm",
	},
	icons: {
		prev: () => <Icon src={"prev"} width={36} height={36} mr={0} />,
		next: () => <Icon src={"next-arrow"} width={36} height={36} mr={0} />,
	},
	datepickerClassNames: "calendarBox",
	defaultDate: new Date(),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "dateFrom",
	inputIdProp: "dateFrom",
	inputPlaceholderProp: "Pick a date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric",
	},
};

const optionsTo = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-secondary p-0",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "!font-sm !font-normal leading-5 !hover:text-zinc-900",
		disabledText: "!text-zinc-400 !font-sm !font-normal leading-5",
		input: "",
		inputIcon: "",
		selected: "!text-zinc-900 !font-normal !hover:text-zinc-900 !font-sm",
	},
	icons: {
		prev: () => <Icon src={"prev"} width={36} height={36} mr={0} />,
		next: () => <Icon src={"next-arrow"} width={36} height={36} mr={0} />,
	},
	datepickerClassNames: "calendarBox",
	defaultDate: new Date(),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "dateTo",
	inputIdProp: "dateTo",
	inputPlaceholderProp: "Pick a date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric",
	},
};

function FilterBox() {
	const [showOrderFor, setShowOrderFor] = useState(false);
	const [showScheduleFilter, setScheduleFilter] = useState(false);
	const [showClientFilter, setShowClientFilter] = useState(false);

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

	const FilterSearch = ({ placeholder, searchType }) => {
		return (
			<div className="flex relative">
				<div className="absolute left-3 top-[5px] flex">
					<Icon src={"search-filter"} mr={"0"}></Icon>
				</div>
				<input
					type="text"
					placeholder={placeholder}
					className="rounded-md w-full min-h-7 bg-gray-50 text-gray-400 py-1 pl-9 pr-4 font-normal text-sm border border-primary"
					name={searchType}
				/>
			</div>
		);
	};

	const handleFromClose = (state) => {
		setFromShow(state);
	};

	const handleToClose = (state) => {
		setToShow(state);
	};

	const FilterMainOptions = () => {
		return (
			<ul className="flex flex-col">
				<li className="cursor-pointer flex items-center rounded-md hover:bg-tableBorderColor p-2">
					<Icon src={"calendar-filter"} />
					<span className="text-sm font-medium text-textColor">
						Scheduled Date
					</span>
					<span className="inline-block ml-auto font-normal font-sm text-textThirdColor">
						{1}
					</span>
				</li>
				<li className="cursor-pointer flex items-center rounded-md hover:bg-tableBorderColor p-2">
					<Icon src={"users"} />
					<span className="text-sm font-medium text-textColor">
						People
					</span>
				</li>
				<li className="cursor-pointer flex items-center rounded-md hover:bg-tableBorderColor p-2">
					<Icon src={"layout-dashboard"} />
					<span className="text-sm font-medium text-textColor">
						Services / Products
					</span>
				</li>
			</ul>
		);
	};

	const FilterSubOptionsBox = () => {
		return (
			<div
				className="p-1 absolute left-0 top-10 border rounded-md w-full shadow-smStrong h-auto"
				style={{ borderColor: "#E4E4E7" }}
			>
				<div className="overflow-auto h-[232px] filter-box">
					<ul className="flex flex-col justify-center items-center">
						{showOrderOptions.map((option) => {
							return (
								<li
									key={option}
									className="flex justify-between items-center px-2 py-1.5 w-full cursor-pointer hover:bg-tableBorderColor "
								>
									<span className="font-normal text-sm text-textColor">
										{option.name}
									</span>
									<Icon src={"check"}></Icon>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	};

	const ScheduledDateFilter = () => {
		return (
			<>
				<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
					Show orders for
				</span>
				<div
					className="border shadow-filterBox bg-secondary py-2 px-3 relative rounded-md mb-5"
					style={{
						borderColor: "#E4E4E7",
					}}
				>
					<div className="flex justify-between items-center cursor-pointer">
						<span className="text-sm font-normal text-textColor inline-block mr-2 max-w-[298px] w-full">
							All time
						</span>
						<Icon src={"chevron-down"} width="20" height="20" />
					</div>
					{showOrderFor ? <FilterSubOptionsBox /> : null}
				</div>
				<div className="flex justify-between items-center gap-[19px]">
					<div className="flex flex-col gap-1.5 max-w-[163px]">
						<span className="text-xs text-textColor font-medium">
							From
						</span>
						<div className="relative">
							<Datepicker
								options={optionsFrom}
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
										<Icon
											src={"calendar-filter"}
											mr={"0"}
										/>
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
					<div className="flex flex-col gap-1.5 max-w-[163px]">
						<span className="text-xs text-textColor font-medium">
							To
						</span>
						<div className="relative">
							<Datepicker
								options={optionsTo}
								onChange={handleToChange}
								show={showTo}
								setShow={handleToClose}
							>
								<div
									className="flex items-center min-h-8 shadow-xs border rounded-md px-4 relative pl-10"
									style={{
										borderColor: "#E2E8F0",
									}}
								>
									<div className="flex items-center absolute left-4 top-[5px] w-4 h-4">
										<Icon
											src={"calendar-filter"}
											mr={"0"}
										/>
									</div>
									<input
										type="text"
										className="max-w-[107px] w-full text-sm font-normal text-dateColor cursor-pointer"
										placeholder="Pick a date"
										value={selectedToDate}
										onFocus={() => setToShow(true)}
										readOnly
									/>
								</div>
							</Datepicker>
						</div>
					</div>
				</div>
			</>
		);
	};

	const ClientList = () => {
		return (
			<>
				<h6 className="text-textSecondaryColor text-sm font-normal">
					Showing 2 results matching ‘Al’
				</h6>
				<ul className="flex flex-col gap-2 mt-3">
					<li className="flex w-full items-center gap-2">
						<input
							type="checkbox"
							name="client"
							className="w-3.5 h-3.5 border border-gray-200"
						/>
						<p className="text-sm font-normal text-tableDataColor">
							Alan
						</p>
						<p className="px-2 py-0.5 bg-primary text-xxs text-textColor rounded">
							Payer
						</p>
					</li>
				</ul>
			</>
		);
	};

	const ClientsFilter = () => {
		return (
			<div className="flex flex-col gap-3">
				<FilterSearch
					placeholder={"Search Payer or attendee name"}
					searchType={"clientSearch"}
				/>
				<div>
					<ClientList />
				</div>
			</div>
		);
	};

	const RadioSelector = ({ label, radioType }) => {
		return (
			<div className="flex max-w-[158px] w-full">
				<input
					type="radio"
					name={radioType}
					id={radioType}
					className="w-4 h-4 border border-tableBorderColor mr-2"
				/>
				<label
					htmlFor={radioType}
					className="text-sm text-textColor font-normal"
				>
					{label}
				</label>
			</div>
		);
	};

	const ServicesFilter = () => {
		return (
			<div className="flex flex-col gap-5">
				<div className="flex items-center justify-between flex-row gap-6">
					<RadioSelector
						label={"Search by name"}
						radioType={"byName"}
					/>
					<RadioSelector
						label={"Search by tags"}
						radioType={"byTags"}
					/>
				</div>
				<FilterSearch
					placeholder={"Search service name"}
					searchType={"serviceSearch"}
				/>
				<div>
					<ClientList />
				</div>
			</div>
		);
	};

	return (
		<div className="w-[612px] min-h-[400px] rounded-md bg-secondary absolute left-0 top-[47px] z-30 shadow-xxl">
			<div className="flex flex-row min-h-[344px]">
				<div
					className="max-w-[230px] w-full flex flex-col p-2 bg-primary border-r"
					style={{
						borderRightColor: "#E2E8F0",
					}}
				>
					<FilterMainOptions></FilterMainOptions>
				</div>
				<div className="max-w-[382px] p-4 w-full">
					{showScheduleFilter ? <ScheduledDateFilter /> : null}
					{showClientFilter ? <ClientsFilter /> : null}
					<ServicesFilter />
				</div>
			</div>
			<div className="flex items-center justify-end py-2 px-4 border-t border-t-tableBorderColor">
				<div className="flex justify-between max-w-[228px] w-full gap-4">
					<button className="py-2 px-4 rounded-md min-h-9 shadow-btnShadow font-medium text-sm leading-6 text-zinc-950 bg-zinc-100">
						Reset to Default
					</button>
					<button className="py-2 px-4 rounded-md min-h-9 shadow-btnShadow font-normal text-sm leading-6 text-secondary bg-textFourthColor">
						Apply
					</button>
				</div>
			</div>
		</div>
	);
}

export default FilterBox;
