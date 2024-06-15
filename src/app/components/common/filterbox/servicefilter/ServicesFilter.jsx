import React, { useState, useContext, useEffect } from "react";
import RadioFilter from "../../radiofilter/RadioFilter";
import DropDownBox from "../../dropdownbox/DropDownBox";
import {
	ServicesStatusData,
	ServicesTypeData,
} from "../../../../utils/servicesType";
import ClientLists from "../../clientlists/ClientLists";
import FilterSearch from "../../filtersearch/FilterSearch";
import { FiltersContext } from "../../../../context/filtersContext";
import { selectedFilters } from "@/app/utils/filters";
import {
	serviceTypeMapping,
	serviceTypeToStatusMapping,
} from "@/app/utils/watchlist";

function ServicesFilter() {
	const { filters, setFilters } = useContext(FiltersContext);
	const [orderForSelected, setOrderForSelected] = useState(() => {
		return filters.servicesByTagName
			? filters.servicesByTagName
			: selectedFilters.servicesByTagName;
	});
	const [selectedRadio, setSelectedRadio] = useState("byName");
	const [showServicesByName, setShowServicesByName] = useState(true);
	const [showServicesByTag, setShowServicesByTag] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [displayedList, setDisplayedList] = useState([]);

	const [servicesType, setServicesType] = useState(() => {
		return filters.servicesByTagName.serviceType
			? filters.servicesByTagName.serviceType
			: {};
	});

	const [servicesStatus, setServicesStatus] = useState(() => {
		return filters.servicesByTagName.serviceStatus
			? filters.servicesByTagName.serviceStatus
			: {};
	});

	const [showServiceTypeDropDown, setShowServiceTypeDropDown] =
		useState(false);

	const [showServiceStatusDropDown, setShowServiceStatusDropDown] =
		useState(false);

	const filterSearchData = (searchTerm) => {
		const filteredData = Object.entries(serviceTypeMapping)
			.filter(([service, type]) =>
				service.toLowerCase().startsWith(searchTerm.toLowerCase())
			)
			.sort(([serviceA], [serviceB]) => serviceA.localeCompare(serviceB))
			.slice(0, 10);

		const sortedData = filteredData.sort(([serviceA], [serviceB]) => {
			const isASelected = filters.servicesNames.includes(serviceA);
			const isBSelected = filters.servicesNames.includes(serviceB);

			if (isASelected && !isBSelected) return -1;
			if (!isASelected && isBSelected) return 1;
			return 0;
		});

		return sortedData.map(([service]) => service);
	};

	const onSearchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
		const servicesNames = searchTerm
			? filterSearchData(searchTerm)
			: filters.servicesNames;

		const updatedService = servicesNames.map((item) => {
			const serviceType = serviceTypeMapping[item];
			const serviceStatus = serviceTypeToStatusMapping[serviceType] || "";

			return {
				name: item,
				type: serviceType || "",
				status: serviceStatus || "",
			};
		});

		setDisplayedList(updatedService);
	};

	const handleRadioChange = (event) => {
		const { id } = event.target;
		setSelectedRadio(id);
		setShowServicesByName(id === "byName");
		setShowServicesByTag(id === "byTags");
	};
	/**
	 * on service type drop down changes
	 */

	const onServiceTypeChanges = (item) => {
		setServicesType(item);
		setOrderForSelected((prev) => ({
			...prev,
			serviceType: {
				name: item.name,
				key: item.key,
			},
		}));
	};

	/**
	 * on service status drop down changes
	 */
	const onServiceStatusChanges = (item) => {
		setServicesStatus(item);
		setOrderForSelected((prev) => ({
			...prev,
			serviceStatus: {
				name: item.name,
				key: item.key,
			},
		}));
	};

	useEffect(() => {
		// If no search term, show the checked result list from the filter array
		if (!searchTerm) {
			const updatedService = filters.servicesNames.map((item) => {
				const serviceType = serviceTypeMapping[item];
				const serviceStatus =
					serviceTypeToStatusMapping[serviceType] || "";

				return {
					name: item,
					type: serviceType || "",
					status: serviceStatus || "",
				};
			});
			setDisplayedList(updatedService);
		}
	}, [filters.servicesNames, searchTerm, filters]);

	useEffect(() => {
		setFilters((prevFilters) => ({
			...prevFilters,
			servicesByTagName: {
				serviceType: orderForSelected.serviceType,
				serviceStatus: orderForSelected.serviceStatus,
			},
		}));
	}, [servicesStatus, servicesType, setFilters]);

	console.log("filters", filters);

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
						onSearch={onSearchHandler}
					/>
					<div>
						<ClientLists
							lists={displayedList}
							searchTerms={searchTerm}
							keyElement="servicesNames"
						/>
					</div>
				</>
			) : null}

			{showServicesByTag ? (
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Service type
						</span>
						<DropDownBox
							selected={servicesType.key || ""}
							placeholder={
								servicesType.name || "Select service type"
							}
							options={ServicesTypeData}
							onDropDownChanges={onServiceTypeChanges}
						></DropDownBox>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-xs text-textColor font-medium mb-1.5 inline-block">
							Status
						</span>
						<DropDownBox
							selected={servicesStatus.key || ""}
							placeholder={
								servicesStatus.name || "Select service status"
							}
							options={ServicesStatusData}
							onDropDownChanges={onServiceStatusChanges}
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
