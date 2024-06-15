import React, { useState, useEffect } from "react";
import TableHeader from "./tableheader/TableHeader";
import TableRow from "./tablerow/TableRow";
import Pagination from "./pagination/Pagination";

function Table({ data }) {
	const totalCount = data?.rows?.length;
	const [tableData, setTableData] = useState(data);
	const [tableHeaderColumn, setTableHeaderColumn] = useState([{}]);
	const [displayPageNumber, setDisplayPageNumber] = useState(15);
	const [currentPage, setCurrentPage] = useState(1);

	const onDisplayPageNumberChange = (displayNumber) => {
		setDisplayPageNumber(displayNumber);
		setCurrentPage(1); // Reset to first page on changing display number
	};

	const onPageNumberHandler = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		/** Get the table Header from table Data */
		const columns = data?.headers?.map((item) => item);
		setTableHeaderColumn(columns);
	}, [data]);

	useEffect(() => {
		/** slice the rows from the table data */
		const startPoint = (currentPage - 1) * displayPageNumber;
		const endPoint = startPoint + displayPageNumber;
		console.log("startPoint, endPoint", startPoint, endPoint);
		const table = data.rows.slice(startPoint, endPoint);
		setTableData({ ...data, rows: table });
	}, [displayPageNumber, data, currentPage]);

	return (
		<>
			<div className="relative overflow-x-auto border mx-4 border-tableBorderColor rounded-md mt-3 h-[480px] table-overflow">
				<table className="w-full text-sm text-left rtl:text-right table-auto">
					<thead className="bg-primary text-xs text-textThirdColor font-medium">
						<TableHeader columns={tableHeaderColumn}></TableHeader>
					</thead>
					<tbody>
						<TableRow data={tableData}></TableRow>
					</tbody>
				</table>
			</div>
			<Pagination
				total={totalCount}
				onDisplayPageNumberChange={onDisplayPageNumberChange}
				onPageNumberHandler={onPageNumberHandler}
			></Pagination>
		</>
	);
}

export default Table;
