import React, { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import Schedule from "./schedule/Schedule";
import ClientsFilter from "./clientsFilter/ClientsFilter";
import ServicesFilter from "./servicefilter/ServicesFilter";
import FilterButtons from "./filterbuttons/FilterButtons";
import { filterList } from "@/app/utils/filters";

function FilterBox({ onButtonClick }) {
	const [showScheduleFilter, setScheduleFilter] = useState(true);
	const [showClientFilter, setClientFilter] = useState(false);
	const [showServicesFilter, setServicesFilter] = useState(false);
	const [activeFilter, setActiveFilter] = useState("");

	const onButtonHandler = (buttonName) => {
		onButtonClick(buttonName);
	};

	const filterChangeHandler = (selectedFilter) => {
		setActiveFilter(selectedFilter);
		console.log("activeFilter", selectedFilter);
		switch (selectedFilter) {
			case "scheduledDate":
				setScheduleFilter(true);
				setClientFilter(false);
				setServicesFilter(false);
				break;
			case "people":
				setScheduleFilter(false);
				setClientFilter(true);
				setServicesFilter(false);
				break;
			case "servicesProducts":
				setScheduleFilter(false);
				setClientFilter(false);
				setServicesFilter(true);
				break;
			default:
				break;
		}
	};

	return (
		<div className="max-w-[612px]  w-full min-h-[400px] rounded-md bg-secondary absolute left-0 top-[47px] z-30 shadow-xxl">
			<div className="flex flex-row min-h-[344px]">
				<div
					className="max-w-[230px] w-full flex flex-col p-2 bg-primary border-r"
					style={{
						borderRightColor: "#E2E8F0",
					}}
				>
					<Filters onFilterChange={filterChangeHandler}></Filters>
				</div>
				<div className="max-w-[382px] p-4 w-full">
					{showScheduleFilter ? <Schedule /> : null}
					{showClientFilter ? <ClientsFilter /> : null}
					{showServicesFilter ? <ServicesFilter /> : null}
				</div>
			</div>
			<FilterButtons onWhichButtonClick={onButtonHandler}></FilterButtons>
		</div>
	);
}

export default FilterBox;
