import React from "react";
import Image from "next/image";

function TableHeaderData({ column, index }) {
	return (
		<th scope="col" key={index} className="px-2 py-2">
			<Image
				src={`../${column.iconUrl}.svg`}
				width={12}
				height={12}
				alt={column.name}
				className="mr-1.5 inline mb-[2px]"
				key={index}
			></Image>
			<span>{column.name}</span>
		</th>
	);
}

export default TableHeaderData;
