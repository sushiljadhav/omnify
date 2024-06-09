"use client";
import Image from "next/image";

const SearchBar = ({ onSearchQuery }) => {
	/**
	 * check user search in input
	 * @param {event} e
	 */
	const searchQueryHandler = (e) => {
		onSearchQuery(e.target.value);
	};

	return (
		<div className="relative flex max-w-[230px] w-full">
			<input
				type="text"
				name="search"
				id="search"
				className="w-full bg-secondary shadow-smStrong h-7 py-1 px-3 pl-[34px] rounded text-xs text-inputColor font-medium"
				placeholder="Search client"
				onChange={(e) => {
					searchQueryHandler(e);
				}}
			/>
			<Image
				className="flex items-center absolute top-2 left-3 cursor-pointer"
				src={"./search.svg"}
				width={12}
				height={12}
				alt="search icon"
			></Image>
		</div>
	);
};

export default SearchBar;
