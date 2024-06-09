"use Client";
import Image from "next/image";

const FunctionalButtons = ({ onFunctionalButtonClick, title, url }) => {
	const buttonClickHandler = () => {
		onFunctionalButtonClick(title);
	};

	return (
		<button
			className="flex items-center justify-center max-w-8 w-full cursor-pointer"
			onClick={buttonClickHandler}
		>
			<Image
				className="flex items-center"
				src={`../${url}.svg`}
				width={16}
				height={16}
				alt={title}
			></Image>
		</button>
	);
};

export default FunctionalButtons;
