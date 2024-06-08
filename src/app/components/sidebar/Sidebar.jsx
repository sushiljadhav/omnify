import React from "react";
import Header from "./header/Header";
import Location from "./location/Location";
import Menu from "./menu/Menu";
import Image from "next/image";
import Bottom from "./bottom/Bottom";
import Help from "./help/Help";

function Sidebar() {
	return (
		<div className="max-w-[212px] mr-auto ml-auto w-full pt-3 pb-2">
			<Header />
			<Location />
			<Menu />
			<div className="flex flex-row px-[6px] py-2 cursor-pointer mb-2">
				<Image
					src={"./layout-dashboard.svg"}
					width={16}
					height={16}
					alt="layout-dashboard"
					className="flex mr-2"
				></Image>
				<p className="text-xs text-textColor font-medium">Dashboard</p>
				<Image
					className="flex ml-auto"
					src={"./url-icon.svg"}
					width={16}
					height={16}
				></Image>
			</div>
			<Bottom />
			<Help />
		</div>
	);
}

export default Sidebar;
