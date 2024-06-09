"use client";
import React, { useState } from "react";
import Header from "./header/Header";
import Location from "./location/Location";
import Menu from "./menu/Menu";
import Image from "next/image";
import Bottom from "./bottom/Bottom";
import Help from "./help/Help";

function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);

	const handleSideBarToggle = (newState) => {
		setIsOpen(newState);
	};

	return (
		<div className={`${isOpen ? "w-[228px]" : "w-16"}`}>
			<div
				className={`${
					isOpen
						? "max-w-[212px] pt-3 pb-2 ml-auto"
						: "max-w-16 px-2 pt-[13px]"
				} mr-auto w-full`}
			>
				<Header isOpen={isOpen} onSideBarToggle={handleSideBarToggle} />
				<Location isOpen={isOpen} />
				<Menu isOpen={isOpen} />
				<div
					className={`flex flex-row cursor-pointer mb-2 ${
						isOpen ? "px-[6px] py-2" : "justify-center py-2 px-4"
					}`}
				>
					{isOpen ? (
						<>
							<Image
								src={"./layout-dashboard.svg"}
								width={16}
								height={16}
								alt="layout-dashboard"
								className={`flex ${isOpen ? "mr-2" : ""}`}
							></Image>
							<p className="text-xs text-textColor font-medium">
								Dashboard
							</p>
						</>
					) : null}

					<Image
						className="flex ml-auto"
						src={"./url-icon.svg"}
						width={16}
						height={16}
					></Image>
				</div>
				<Bottom isOpen={isOpen} />
				<Help isOpen={isOpen} />
			</div>
		</div>
	);
}

export default Sidebar;
