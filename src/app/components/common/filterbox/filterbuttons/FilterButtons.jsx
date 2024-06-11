import React from "react";

function FilterButtons() {
	return (
		<div className="flex items-center justify-end py-2 px-4 border-t border-t-tableBorderColor">
			<div className="flex justify-between max-w-[228px] w-full gap-4">
				<button className="py-2 px-4 rounded-md min-h-9 shadow-btnShadow font-medium text-sm leading-6 text-zinc-950 bg-zinc-100">
					Reset to Default
				</button>
				<button className="py-2 px-4 rounded-md min-h-9 shadow-btnShadow font-normal text-sm leading-6 text-secondary bg-textFourthColor">
					Apply
				</button>
			</div>
		</div>
	);
}

export default FilterButtons;
