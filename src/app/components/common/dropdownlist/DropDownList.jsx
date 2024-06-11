import Icon from "../icon/Icon";

function DropDownList({ lists }) {
	return (
		<div className="overflow-auto h-[232px] filter-box">
			<ul className="flex flex-col justify-center items-center">
				{lists.map((items, index) => {
					return (
						<li
							key={index}
							className="flex justify-between items-center px-2 py-1.5 w-full cursor-pointer hover:bg-tableBorderColor "
						>
							<span className="font-normal text-sm text-textColor">
								{items.name}
							</span>
							<Icon src={"check"}></Icon>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default DropDownList;
