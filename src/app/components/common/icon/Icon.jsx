import Image from "next/image";

const Icon = ({ src, width, height, mr }) => {
	return (
		<Image
			src={`../${src}.svg`}
			alt="icon"
			width={width ? width : 16}
			height={height ? height : 16}
			className={`flex ${mr ? `mr-${mr}` : `mr-2`}`}
		></Image>
	);
};

export default Icon;
