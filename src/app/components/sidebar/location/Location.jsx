"use client";
import React, { useState, useEffect } from "react";
import { getTime } from "@/app/helper/helper";
import Image from "next/image";

function Location({ isOpen }) {
	const [timeData, setTimeData] = useState({
		time: "",
		UTC: "",
		outputDay: "",
	});

	useEffect(() => {
		const updateTime = () => setTimeData(getTime());
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	const TimeInformation = () => {
		return (
			<>
				<div className="flex flex-col max-w-[148px] w-full">
					<h2 className="font-Helvetica_Neue_Bold font-bold text-sm text-textColor leading-5">
						{timeData.time}
						<span className="font-Helvetica_Neue_Medium text-sm text-textColor font-medium inline-block ml-2">
							{timeData.outputDay}
						</span>
					</h2>
					<div className="flex flex-row items-center">
						<Image
							src="../global.svg"
							alt="Global"
							width={13}
							height={13}
							className="flex items-center mr-1"
						></Image>

						<p className="text-textColor font-medium text-xxs leading-5 mt-1.5">
							UTC: {timeData.UTC} hours
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center">
					<Image
						src="../down-arrow.svg"
						alt="Global"
						width={16}
						height={16}
						className="flex items-center"
					></Image>
				</div>
			</>
		);
	};

	return (
		<div className="pt-2 mt-3 mb-6">
			<div
				className={`flex ${
					isOpen ? "py-2 pr-2 pl-3" : "py-5 px-3 justify-center pr-2"
				}  bg-secondary shadow-sm shadow-[#64748B] rounded-md border-b-[1px] relative -z-[-1]`}
				style={{ borderBottomColor: "#E2E8F0" }}
			>
				{isOpen ? (
					<h5 className="text-xs leading-5 font-medium text-textColor py">
						Location Name
					</h5>
				) : null}

				<span
					className={`flex items-center ${isOpen ? "ml-auto" : ""}`}
				>
					<svg
						width={16}
						height={16}
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.3334 7.33333L14 4.66667L11.3334 2"
							stroke="#475569"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 4.66675H6"
							stroke="#475569"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4.66667 14.0001L2 11.3334L4.66667 8.66675"
							stroke="#475569"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M10 11.3333H2"
							stroke="#475569"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
			<div
				className={`flex flex-row bg-boxColor max-w-[193px] w-full mx-auto shadow-sm rounded ${
					isOpen
						? "pb-1.5 px-3 justify-between"
						: "pt-3 pb-1.5 px-1.5 justify-center"
				}`}
			>
				{isOpen ? (
					<TimeInformation></TimeInformation>
				) : (
					<Image
						src="../global.svg"
						alt="Global"
						width={17}
						height={13}
						className="flex items-center"
					></Image>
				)}
			</div>
		</div>
	);
}

export default Location;
