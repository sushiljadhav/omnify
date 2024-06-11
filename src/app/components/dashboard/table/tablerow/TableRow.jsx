import React from "react";
import CheckBox from "../../../common/checkbox/CheckBox";
import TableRowData from "./tablerowdata/TableRowData";
import { watchList } from "../../../../utils/watchlist";

function TableRow({ data }) {
	return (
		<>
			{data.rows.map((row, rowIndex) => (
				<tr
					key={rowIndex}
					className="bg-white border-b"
					style={{
						borderBottomColor: "#EBEEF0",
					}}
				>
					<td scope="col" className="py-2 pl-4 pr-2">
						<CheckBox />
					</td>
					{data.headers.map((header, colIndex) => (
						<>
							<TableRowData
								row={row[header.key]}
								index={colIndex}
							/>
						</>
					))}
				</tr>
			))}
		</>
	);
}

export default TableRow;
