import React from "react";
import CheckBox from "../../../common/checkbox/CheckBox";
import TableRowData from "./tablerowdata/TableRowData";
import { watchList } from "../../../../utils/watchlist";

function TableRow() {
	return (
		<>
			{watchList.map((user) => (
				<tr
					key={user.payer}
					className="bg-white border-b"
					style={{
						borderBottomColor: "#EBEEF0",
					}}
				>
					<td scope="col" className="py-2 pl-4 pr-2">
						<CheckBox />
					</td>
					<TableRowData user={user} />
				</tr>
			))}
		</>
	);
}

export default TableRow;
