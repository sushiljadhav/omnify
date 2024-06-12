import React, { useState } from "react";
import Icon from "../icon/Icon";
import { filterList } from "@/app/utils/filters";

function Filters({ onFilterChange }) {
	const [activeFilter, setActiveFilter] = useState("scheduledDate");

	const listClickHandler = (activeItemKey) => {
		setActiveFilter(activeItemKey);
		onFilterChange(activeItemKey);
	};

	const List = () => {
		return filterList.map((list, index) => {
			return (
				<li
					key={index}
					className={`cursor-pointer flex items-center rounded-md p-2 ${
						list.key === activeFilter
							? "bg-tableBorderColor"
							: "hover:bg-tableBorderColor"
					}`}
					onClick={() => {
						listClickHandler(list.key);
					}}
				>
					<Icon src={list.icon} />
					<span className="text-sm font-medium text-textColor">
						{list.name}
					</span>
					{list.key === "scheduledDate" ? (
						<span className="inline-block ml-auto font-normal font-sm text-textThirdColor">
							{1}
						</span>
					) : null}
				</li>
			);
		});
	};
	return (
		<ul className="flex flex-col">
			<List />
		</ul>
	);
}

export default Filters;
