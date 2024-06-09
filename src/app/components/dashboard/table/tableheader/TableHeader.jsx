import { tableHeaderData } from "../../../../utils/tableHeaderData";
import TableHeaderData from "./tableheaderdata/TableHeaderData";
import CheckBox from "../../../common/checkbox/CheckBox";

const TableHeader = () => {
	return (
		<tr
			className="border-b"
			style={{
				borderBottomColor: "#EBEEF0",
			}}
		>
			<th scope="col" className="py-2 pl-4 pr-2">
				<CheckBox></CheckBox>
			</th>
			{tableHeaderData.map((header) => {
				return <TableHeaderData key={header.name} header={header} />;
			})}
		</tr>
	);
};

export default TableHeader;
