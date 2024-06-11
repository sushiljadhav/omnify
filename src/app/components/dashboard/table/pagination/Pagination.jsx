"use client";
import React, { useState } from "react";
import Image from "next/image";

const displayNumberData = [5, 10, 15, 20, 25];

function Pagination({ total, onDisplayPageNumberChange, onPageNumberHandler }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [displayNumber, setDisplayNumber] = useState(15);
	const [showDisplayNumberBox, setDisplayNumberBox] = useState(false);
	const totalPages = Math.ceil(total / displayNumber);

	const onPageNumberClickHandler = (pageNumber) => {
		setCurrentPage(pageNumber);
		onPageNumberHandler(pageNumber);
	};

	const showBoxHandler = () => {
		setDisplayNumberBox(!showDisplayNumberBox);
	};

	const displayNumberHandler = (item) => {
		setDisplayNumber(item);
		setDisplayNumberBox(false);
		onDisplayPageNumberChange(item);
		setCurrentPage(1); // Reset to first page on changing display number
	};

	const onNextPage = () => {
		if (currentPage < totalPages) {
			const newPage = currentPage + 1;
			setCurrentPage(newPage);
			onPageNumberHandler(newPage);
		}
	};

	const onPrevPage = () => {
		if (currentPage > 1) {
			const newPage = currentPage - 1;
			setCurrentPage(newPage);
			onPageNumberHandler(newPage);
		}
	};

	const getVisiblePageNumbers = () => {
		let start = Math.max(currentPage - 1, 1);
		let end = start + 2;
		if (end > totalPages) {
			end = totalPages;
			start = Math.max(end - 2, 1);
		}
		const pageNumbers = [];
		for (let i = start; i <= end; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const NumberBox = () => {
		return (
			<div className="flex flex-col justify-center items-center bg-secondary rounded-md">
				{displayNumberData.map((item) => (
					<button
						key={item}
						className="text-textThirdColor text-sm font-normal mb-1 hover:bg-primary w-full flex justify-center"
						onClick={() => displayNumberHandler(item)}
					>
						{item}
					</button>
				))}
			</div>
		);
	};

	const PageNumber = ({ number }) => {
		return (
			<button
				className={`max-w-8 min-h-8 w-full flex items-center justify-center text-textColor font-medium text-xs cursor-pointer hover:bg-secondary hover:border rounded-md border-tableBorderColor ${
					currentPage === number
						? "bg-secondary active-page-button"
						: ""
				}`}
				onClick={() => onPageNumberClickHandler(number)}
			>
				{number}
			</button>
		);
	};

	const PageButton = ({ title, arrow, onClick, disabled }) => {
		return (
			<button
				className={`flex items-center justify-between max-w-[89px] hover:text-textThirdColor ${
					disabled ? "opacity-75" : ""
				}`}
				onClick={onClick}
				disabled={disabled}
			>
				{title === "Previous" ? (
					<Image
						src={`../${arrow}.svg`}
						alt={title}
						width={16}
						height={16}
						className="flex items-center cursor-pointer mr-2"
					/>
				) : null}
				<span className="text-xs text-textColor font-medium">
					{title}
				</span>
				{title === "Next" ? (
					<Image
						src={`../${arrow}.svg`}
						alt={title}
						width={16}
						height={16}
						className="flex items-center cursor-pointer ml-2"
					/>
				) : null}
			</button>
		);
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
						/>
					</div>
					{showDisplayNumberBox ? (
						<div className="absolute top-[-118px] left-0 max-w-[62px] w-full bottom-0 shadow-smStrong rounded-md z-[1]">
							<NumberBox />
						</div>
					) : null}
				</div>
				<span className="text-sm font-medium text-textThirdColor">
					{" "}
					out of <span className="text-textFourthColor">{total}</span>
				</span>
			</div>
			<div className="flex items-center max-w-[328px] w-full">
				<PageButton
					title={"Previous"}
					arrow={"chevron-left"}
					onClick={onPrevPage}
					disabled={currentPage === 1}
				/>
				<div className="flex items-center max-w-[100px] w-full">
					<div className="flex flex-row items-center gap-0.5 w-full mx-0.5">
						{getVisiblePageNumbers().map((number) => (
							<PageNumber key={number} number={number} />
						))}
					</div>
				</div>
				<PageButton
					title={"Next"}
					arrow={"chevron-right"}
					onClick={onNextPage}
					disabled={currentPage === totalPages}
				/>
			</div>
		</div>
	);
}

export default Pagination;
