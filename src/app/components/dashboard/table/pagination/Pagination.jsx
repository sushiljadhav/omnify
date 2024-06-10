"use client";
import React, { useState } from "react";
import Image from "next/image";

const displayNumberData = [5, 10, 15, 20, 25];

function Pagination() {
	const [displayNumber, setDisplayNumber] = useState(15);
	const [showDisplayNumberBox, setDisplayNumberBox] = useState(false);

	const displayNumberHandler = (item) => {
		setDisplayNumber(item);
		setDisplayNumberBox(false);
	};

	const NumberBox = () => {
		return (
			<ul className="flex flex-col justify-center items-center bg-secondary rounded-md">
				{displayNumberData.map((item) => {
					return (
						<li
							key={item}
							className="text-textThirdColor text-sm font-normal mb-1 hover:bg-primary w-full flex justify-center"
							onClick={() => displayNumberHandler(item)}
						>
							{item}
						</li>
					);
				})}
			</ul>
		);
	};

	const PageNumber = ({ number }) => {
		return (
			<li className="max-w-8 min-h-8 w-full flex items-center justify-center text-textColor font-medium text-xs cursor-pointer hover:bg-secondary hover:border rounded-md  border-tableBorderColor">
				{number}
			</li>
		);
	};

	const PageButton = ({ title, arrow }) => {
		return (
			<button className="flex items-center justify-between max-w-[89px]">
				{title === "Previous" ? (
					<Image
						src={`../${arrow}.svg`}
						alt={title}
						width={16}
						height={16}
						className="flex items-center cursor-pointer mr-2"
					></Image>
				) : null}
				<span className="text-xs text-textColor font-medium">
					{title}
				</span>
				{title === "Next" ? (
					<Image
						src={`../${arrow}.svg`}
						alt="{title}"
						width={16}
						height={16}
						className="flex items-center cursor-pointer ml-2"
					></Image>
				) : null}
			</button>
		);
	};

	const showBoxHandler = () => {
		setDisplayNumberBox(!showDisplayNumberBox);
	};

	return (
		<div className="flex items-center justify-between py-3">
			<div className="flex items-center max-w-[205px] w-full">
				<span className="text-textThirdColor text-sm font-normal">
					Displaying
				</span>
				<div
					className="ml-0.5 mr-0.5 relative bg-primary max-w-[62px] w-full flex items-center py-1 px-3 rounded-md cursor-pointer"
					onClick={showBoxHandler}
				>
					<div className="flex items-center gap-1.5 p-0">
						<span className="text-sm text-textColor leading-6">
							{displayNumber}
						</span>
						<Image
							src={"../chevrons-up-down.svg"}
							alt="arrow"
							width={16}
							height={16}
							className="flex items-center"
						></Image>
					</div>
					{showDisplayNumberBox ? (
						<div className="absolute top-[-118px] left-0 max-w-[62px] w-full bottom-0 shadow-smStrong rounded-md z-[1]">
							<NumberBox />
						</div>
					) : null}
				</div>
				<span className="text-sm font-medium text-textThirdColor">
					{" "}
					out of <span className="text-textFourthColor">104</span>
				</span>
			</div>
			<div className="flex items-center max-w-[328px] w-full">
				<PageButton title={"Previous"} arrow={"chevron-left"} />
				<div className="flex items-center max-w-[100px] w-full">
					<ul className="flex flex-row items-center gap-0.5 w-full mx-0.5">
						<PageNumber number={1} />
						<PageNumber number={2} />
						<PageNumber number={3} />
					</ul>
				</div>
				<PageButton title={"Next"} arrow={"chevron-right"} />
			</div>
		</div>
	);
}

export default Pagination;
