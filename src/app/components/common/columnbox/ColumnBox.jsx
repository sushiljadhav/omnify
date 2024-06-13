import React, { useState } from "react";
import CheckBox from "../checkbox/CheckBox";
import { selectedFilters } from "@/app/utils/filters";
import FilterButtons from "../filterbox/filterbuttons/FilterButtons";

function ColumnBox({ columns, onTableColumnChange }) {
	const [selectedColFilters, setSelectedColFilters] =
		useState(selectedFilters);
	const [onButtonUpdate, setOnButtonUpdate] = useState("");

	const buttonClick = (button) => {
		setOnButtonUpdate(button);

		if (button === "reset") {
			setSelectedColFilters((prev) => {
				const updatedFilters = {
					...prev,
					columns: [],
				};

				// Call the function with the updated columns array
				onTableColumnChange([]);

				return updatedFilters;
			});
		} else if (button === "apply") {
			console.log(selectedColFilters.columns);
			onTableColumnChange(selectedColFilters.columns);
		}
	};

	const onCheckedHandler = (isChecked, col) => {
		setSelectedColFilters((prev) => {
			let updatedColumns;

			if (isChecked) {
				updatedColumns = prev.columns.filter(
					(column) => column !== col
				);
			} else {
				updatedColumns = [...prev.columns, col];
			}

			const updatedFilters = {
				...prev,
				columns: updatedColumns,
			};

			return updatedFilters;
		});
	};

	return (
		<div className="max-w-[320px] absolute top-14 right-[-15px] bg-secondary z-50 w-full rounded-[12px] shadow-columnBox border border-tableBorderColor p-4 flex flex-col">
			<div className="flex flex-col mb-4">
				<h4 className="text-base font-medium text-radio mb-2">
					Edit Columns
				</h4>
				<span className="text-sm font-normal text-textColor">
					Select the columns to rearrange
				</span>
			</div>
			<div className="min-h-[324px] p-0.5 overflow-auto ">
				<ul className="min-h-[324px]">
					{columns?.map((column) => {
						const isChecked = !selectedColFilters.columns.includes(
							column.key
						);
						return (
							<li
								key={column?.key}
								className="flex flex-row gap-2 mb-3"
							>
								<CheckBox
									checkedHandler={onCheckedHandler}
									col={column.key}
									checked={isChecked}
								></CheckBox>
								<div className="py-1.5 px-3 border border-tableBorderColor max-w-[242px] w-full rounded-md">
									<p className="text-sm text-textColor font-medium">
										{column?.name}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<FilterButtons onWhichButtonClick={buttonClick} />
		</div>
	);
}

export default ColumnBox;
