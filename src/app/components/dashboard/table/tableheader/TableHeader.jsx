import { tableHeaderData } from "../../../../utils/tableHeaderData";
import TableHeaderData from "./tableheaderdata/TableHeaderData";
import CheckBox from "../../../common/checkbox/CheckBox";

const TableHeader = ({ columns }) => {
	return (
		<tr
			className="border-b"
			style={{
				borderBottomColor: "#EBEEF0",
			}}
			key={"item"}
		>
			<th scope="col" className="py-2 pl-4 pr-2" key="table-header">
				<CheckBox></CheckBox>
			</th>
			{columns.map((column) => {
				return <TableHeaderData key={column.name} column={column} />;
			})}
		</tr>
	);
};

export default TableHeader;
