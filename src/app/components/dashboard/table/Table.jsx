import React from "react";
import TableHeader from "./tableheader/TableHeader";
import TableRow from "./tablerow/TableRow";

function Table() {
	return (
		<div className="relative overflow-x-auto border border-tableBorderColor rounded-md mt-3">
			<table className="w-full text-sm text-left rtl:text-right table-auto">
				<thead className="bg-primary text-xs text-textThirdColor font-medium">
					<TableHeader></TableHeader>
				</thead>
				<tbody>
					<TableRow></TableRow>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
