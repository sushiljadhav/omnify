"use client";
import React, { useState } from "react";
import Image from "next/image";

function Header({ isOpen, onSideBarToggle }) {
	const sideBarHandler = () => {
		onSideBarToggle(!isOpen);
	};

	return (
		<div className="flex items-center pl-2 pt-2 pb-2">
			<Image
				src="../front_logo.svg"
				width={22}
				height={22}
				alt="logo"
				onClick={!isOpen ? sideBarHandler : null}
				className={`flex ${!isOpen ? "cursor-pointer" : ""}`}
			></Image>
			{isOpen ? (
				<>
					<h1 className="font-poppins font-bold text-md leading-6 ml-2 text-headTextColor">
						Front·Desk
					</h1>
					<Image
						src="../columns.svg"
						width={16}
						height={16}
						alt="logo"
						className="flex cursor-pointer ml-auto items-center"
						onClick={sideBarHandler}
					></Image>
				</>
			) : null}
		</div>
	);
}

export default Header;
