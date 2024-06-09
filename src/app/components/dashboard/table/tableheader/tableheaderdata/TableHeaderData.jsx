import React from "react";
import Image from "next/image";

function TableHeaderData({ header }) {
	return (
		<th scope="col" key={header.name} className="px-2 py-2">
			<Image
				src={`../${header.iconUrl}.svg`}
				width={12}
				height={12}
				alt={header.name}
				className="mr-1.5 inline mb-[2px]"
			></Image>
			<span>{header.name}</span>
		</th>
	);
}

export default TableHeaderData;
