import React from "react";

function TableRowData({ row, index }) {
	return (
		<>
			<td
				key={index}
				scope="row"
				className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor"
			>
				{row}
			</td>
		</>
	);
}

export default TableRowData;
