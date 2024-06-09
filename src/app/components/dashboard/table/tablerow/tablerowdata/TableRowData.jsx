import React from "react";

function TableRowData({ user }) {
	return (
		<>
			<td
				scope="row"
				className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor"
			>
				{user.createdOn}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.payer}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.status}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.email}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.phone}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.services}
			</td>
			<td className="px-2 py-3 font-medium text-xs whitespace-nowrap text-tableDataColor">
				{user.schedule}
			</td>
		</>
	);
}

export default TableRowData;
