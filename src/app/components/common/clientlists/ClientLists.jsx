import React from "react";

function ClientLists() {
	return (
		<>
			<h6 className="text-textSecondaryColor text-sm font-normal">
				Showing 2 results matching ‘Al’
			</h6>
			<ul className="flex flex-col gap-2 mt-3">
				<li className="flex w-full items-center gap-2">
					<input
						type="checkbox"
						name="client"
						className="w-3.5 h-3.5 border border-gray-200"
					/>
					<p className="text-sm font-normal text-tableDataColor">
						Alan
					</p>
					<p className="px-2 py-0.5 bg-primary text-xxs text-textColor rounded">
						Payer
					</p>
				</li>
			</ul>
		</>
	);
}

export default ClientLists;
