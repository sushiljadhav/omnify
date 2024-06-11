import React, { useState } from "react";
import Filters from "../filters/Filters";
import Schedule from "./schedule/Schedule";
import ClientsFilter from "./clientsFilter/ClientsFilter";
import ServicesFilter from "./servicefilter/ServicesFilter";
import FilterButtons from "./filterbuttons/FilterButtons";

function FilterBox() {
	const [showScheduleFilter, setScheduleFilter] = useState(true);
	const [showClientFilter, setClientFilter] = useState(false);
	const [showServicesFilter, setServicesFilter] = useState(true);

	return (
		<div className="w-[612px] min-h-[400px] rounded-md bg-secondary absolute left-0 top-[47px] z-30 shadow-xxl">
			<div className="flex flex-row min-h-[344px]">
				<div
					className="max-w-[230px] w-full flex flex-col p-2 bg-primary border-r"
					style={{
						borderRightColor: "#E2E8F0",
					}}
				>
					<Filters></Filters>
				</div>
				<div className="max-w-[382px] p-4 w-full">
					{showScheduleFilter ? <Schedule /> : null}
					{showClientFilter ? <ClientsFilter /> : null}
					{showServicesFilter ? <ServicesFilter /> : null}
				</div>
			</div>
			<FilterButtons></FilterButtons>
		</div>
	);
}

export default FilterBox;
