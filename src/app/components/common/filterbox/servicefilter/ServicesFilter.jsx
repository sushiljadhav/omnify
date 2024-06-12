import React, { useState } from "react";
import RadioFilter from "../../radiofilter/RadioFilter";
import DropDownBox from "../../dropdownbox/DropDownBox";
import { ServicesStatus, ServicesType } from "../../../../utils/servicesType";
import ClientLists from "../../clientlists/ClientLists";
import FilterSearch from "../../filtersearch/FilterSearch";

function ServicesFilter() {
	const [selectedRadio, setSelectedRadio] = useState("byName");
	const [showServicesByName, setShowServicesByName] = useState(true);
	const [showServicesByTag, setShowServicesByTag] = useState(false);

	const [showServiceTypeDropDown, setShowServiceTypeDropDown] =
		useState(false);

	const [showServiceStatusDropDown, setShowServiceStatusDropDown] =
		useState(false);

	const handleRadioChange = (event) => {
		const { id } = event.target;
		setSelectedRadio(id);
		setShowServicesByName(id === "byName");
		setShowServicesByTag(id === "byTags");
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex items-center justify-between flex-row gap-6">
				<RadioFilter
					label={"Search by name"}
					radioType={"byName"}
					name={"services"}
					checked={selectedRadio === "byName"}
					onChange={handleRadioChange}
				/>
				<RadioFilter
					label={"Search by tags"}
					radioType={"byTags"}
					name={"services"}
					checked={selectedRadio === "byTags"}
					onChange={handleRadioChange}
				/>
			</div>
			{showServicesByName ? (
				<>
					<FilterSearch
						placeholder={"Search service name"}
						searchType={"serviceSearch"}
					/>
					<div>{/* <ClientLists /> */}</div>
				</>
			) : null}

			{showServicesByTag ? (
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Service type
						</span>
						<DropDownBox
							selected={"All time"}
							options={ServicesType}
							placeholder={"Select service type"}
						></DropDownBox>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Status
						</span>
						<DropDownBox
							selected={"ServicesStatus"}
							options={ServicesStatus}
							placeholder={"Select service status"}
						></DropDownBox>
					</div>

					{/* <div>
						<ClientLists />
					</div> */}
				</div>
			) : null}
		</div>
	);
}

export default ServicesFilter;
