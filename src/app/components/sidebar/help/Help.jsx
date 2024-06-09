import React from "react";
import Image from "next/image";

function Help({ isOpen }) {
	return (
		<div
			className={`${
				!isOpen ? "justify-center py-4 px-2" : ""
			} flex flex-row max-w-[196px] mx-auto items-center w-full py-2`}
		>
			<div>
				<Image
					src={"../help-circle.svg"}
					className="flex mr-2"
					width={16}
					height={16}
				></Image>
			</div>
			{isOpen ? (
				<div className="flex flex-col">
					<p className="font-normal text-xs text-textColor">
						Help center
					</p>
					<p className="font-normal text-xxs text-textThirdColor">
						@2024 Omnify.Inc.{" "}
					</p>
				</div>
			) : null}
		</div>
	);
}

export default Help;
