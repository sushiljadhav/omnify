import React from "react";
import Image from "next/image";

const user = {
	profileUrl: "../avatar.svg",
	name: "Admin name",
	email: "adminname@mail.com",
};

function Bottom({ isOpen }) {
	return (
		<div
			className={`flex items-center bg-secondary rounded-md mb-[2px] ${
				isOpen ? "px-2 py-[10px]" : "py-[15px] px-2 justify-center"
			}`}
		>
			<Image
				src={user.profileUrl}
				alt="avatar"
				width={24}
				height={24}
				className="flex items-center"
			></Image>
			{isOpen ? (
				<>
					<div className="flex flex-col ml-2">
						<p className="text-xs text-textSecondaryColor font-medium">
							{user.name}
						</p>
						<p className="text-textThirdColor text-xs font-normal">
							{user.email}
						</p>
					</div>
					<Image
						src={"../down-arrow.svg"}
						alt="down"
						width={16}
						height={16}
						className="flex ml-auto"
					></Image>
				</>
			) : null}
		</div>
	);
}

export default Bottom;
