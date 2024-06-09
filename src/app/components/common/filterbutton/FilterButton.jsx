import Image from "next/image";

const FilterButton = () => {
	return (
		<button className="flex items-center py-1.5 px-3 gap-1.5 bg-boxColor rounded-md cursor-pointer">
			<Image
				className="flex items-center"
				src={"../filter.svg"}
				width={16}
				height={16}
				alt="Filter Icon"
			></Image>
			<p className="text-textColor text-xs font-medium">Add Filter</p>
		</button>
	);
};

export default FilterButton;
