import React from "react";
import CheckBox from "../checkbox/CheckBox";

function ColumnBox() {
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
					<li className="flex flex-row gap-2 mb-3">
						<CheckBox></CheckBox>
						<div className="py-1.5 px-3 border border-tableBorderColor max-w-[242px] w-full rounded-md">
							<p className="text-sm text-textColor font-medium">
								Order Created On
							</p>
						</div>
					</li>
					<li className="flex flex-row gap-2 mb-3">
						<CheckBox></CheckBox>
						<div className="py-1.5 px-3 border border-tableBorderColor max-w-[242px] w-full rounded-md">
							<p className="text-sm text-textColor font-medium">
								Order Created On
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ColumnBox;
