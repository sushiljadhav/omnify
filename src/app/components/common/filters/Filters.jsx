import React from "react";
import Icon from "../icon/Icon";

function Filters() {
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
}

export default Filters;
