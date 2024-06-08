"use client";
import React, { useState, useEffect } from "react";

function Location() {
	const [timeData, setTimeData] = useState({
		time: "",
		UTC: "",
		outputDay: "",
	});

	const getTime = () => {
		const _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Friday", "Sat"];
		let time, UTC, outputDay;
		const _months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const dates = new Date();
		time = dates.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
		const day = _days[dates.getDay()];
		const date = dates.getDate();
		const month = _months[dates.getMonth()];
		UTC = dates.toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
		outputDay = `${day} ${date} ${month}`;
		return {
			time,
			UTC,
			outputDay,
		};
	};

	useEffect(() => {
		const updateTime = () => setTimeData(getTime());
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="pt-2 mt-3 mb-6">
			<div
				className="flex py-2 pr-2 pl-3 bg-secondary shadow-sm shadow-[#64748B
] rounded-md border-b-[1px] border-b-slate-200"
			>
				<h5 className="text-xs leading-5 font-medium text-textColor">
					Location Name
				</h5>
				<span className="flex items-center ml-auto">
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
			<div className="flex flex-row bg-boxColor pb-[6px] px-3 max-w-[193px] w-full mx-auto shadow-sm rounded">
				<div className="mb-1.5 flex flex-col max-w-[148px]">
					<h2 className="font-bold text-base text-textColor leading-5">
						{timeData.time}
						<span className="text-sm text-textColor font-medium inline-block ml-2">
							{timeData.outputDay}
						</span>
					</h2>
					<div className="flex flex-row items-center">
						<span className="flex mr-1">
							<svg
								width={14}
								height={14}
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.00004 12.4166C9.99158 12.4166 12.4167 9.99146 12.4167 6.99992C12.4167 4.00838 9.99158 1.58325 7.00004 1.58325C4.0085 1.58325 1.58337 4.00838 1.58337 6.99992C1.58337 9.99146 4.0085 12.4166 7.00004 12.4166Z"
									stroke="#64748B"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1.58337 7H12.4167"
									stroke="#64748B"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7.00004 1.58325C8.3549 3.06653 9.12487 4.99144 9.16671 6.99992C9.12487 9.0084 8.3549 10.9333 7.00004 12.4166C5.64518 10.9333 4.87522 9.0084 4.83337 6.99992C4.87522 4.99144 5.64518 3.06653 7.00004 1.58325Z"
									stroke="#64748B"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
						<p className="text-textColor font-medium text-xxs leading-5">
							UTC: {timeData.UTC} hours
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center mt-[6px]">
					<span className="flex items-center">
						<svg
							width={17}
							height={16}
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.5 6L8.5 10L12.5 6"
								stroke="#334155"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Location;
