import React, { useState } from "react";
import RadioFilter from "../../radiofilter/RadioFilter";
import DropDownBox from "../../dropdownbox/DropDownBox";
import { ServicesStatus, ServicesType } from "../../../../utils/servicesType";
import ClientLists from "../../clientlists/ClientLists";

function ServicesFilter() {
	const [showServicesByName, setShowServicesByName] = useState(false);
	const [showServicesByTag, setShowServicesByTag] = useState(false);

	const [showServiceTypeDropDown, setShowServiceTypeDropDown] =
		useState(false);

	const [showServiceStatusDropDown, setShowServiceStatusDropDown] =
		useState(false);

	return (
		<div className="flex flex-col gap-5">
			<div className="flex items-center justify-between flex-row gap-6">
				<RadioFilter
					label={"Search by name"}
					radioType={"byName"}
					name={"services"}
				/>
				<RadioFilter
					label={"Search by tags"}
					radioType={"byTags"}
					name={"services"}
				/>
			</div>
			{showServicesByName ? (
				<>
					<FilterSearch
						placeholder={"Search service name"}
						searchType={"serviceSearch"}
					/>
					<div>
						<ClientLists />
					</div>
				</>
			) : null}

			{showServicesByTag ? (
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Service type
						</span>
						{showServiceTypeDropDown ? (
							<DropDownBox
								selected={"All time"}
								options={ServicesType}
								placeholder={"Select service type"}
							></DropDownBox>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Status
						</span>
						{showServiceStatusDropDown ? (
							<DropDownBox
								selected={"ServicesStatus"}
								options={ServicesStatus}
								placeholder={"Select service status"}
							></DropDownBox>
						) : null}
					</div>

					<div>
						<ClientLists />
					</div>
				</div>
			) : null}
		</div>
	);
}

export default ServicesFilter;
