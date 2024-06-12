import { useState } from "react";
import Icon from "../icon/Icon";

function DropDownList({
	lists,
	onDropDownChanges,
	selected,
	onDropDownCloseHandler,
}) {
	const [activeFilter, setActiveFilter] = useState(selected);

	const onDropDownOptionChange = (option) => {
		onDropDownChanges(option);
		setActiveFilter(option.key);
		onDropDownCloseHandler(false);
	};

	return (
		<div className="overflow-auto h-[232px] filter-box">
			<ul className="flex flex-col justify-center items-center">
				{lists.map((items, index) => {
					return (
						<li
							key={index}
							className={`flex justify-between items-center px-2 py-1.5 w-full cursor-pointer hover:bg-tableBorderColor ${
								items.key === activeFilter
									? "bg-tableBorderColor"
									: "hover:bg-tableBorderColor"
							}`}
							onClick={() => {
								onDropDownOptionChange(items);
							}}
						>
							<span className="font-normal text-sm text-textColor">
								{items.name}
							</span>
							{items.key === activeFilter ? (
								<Icon src={"check"} />
							) : (
								""
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default DropDownList;
