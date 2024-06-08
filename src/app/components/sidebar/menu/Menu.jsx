import React from "react";
import Image from "next/image";

const Menus = [
	{
		icon: "../inbox.svg",
		name: "Orders",
	},
	{
		icon: "../subscription.svg",
		name: "Subscriptions",
	},
	{
		icon: "../calendar-days.svg",
		name: "Calendar",
	},
	{
		icon: "../hourglass.svg",
		name: "Waitlist",
	},
];

function Menu() {
	return (
		<ul className="flex flex-col min-h-[431px]">
			{Menus.map((menu) => {
				return (
					<li
						key={menu.name}
						className="flex items-center py-1.5 px-2 mb-[2px] cursor-pointer hover:bg-secondary hover:border-b-1 hover:rounded-md"
					>
						<Image
							className="flex mr-2"
							src={menu.icon}
							width={16}
							height={16}
							alt={menu.name}
						></Image>
						<h6 className="text-textColor font-medium text-xs capitalize">
							{menu.name}
						</h6>
					</li>
				);
			})}
		</ul>
	);
}

export default Menu;
