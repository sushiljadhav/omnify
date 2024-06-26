export const getTime = () => {
	const _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let time, UTC, outputDay;
	const _months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const dates = new Date();
	time = dates.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	const day = _days[dates.getDay()];
	const date = dates.getDate();
	const month = _months[dates.getMonth()];
	UTC = dates.toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
	UTC = UTC.replace("GMT", "");
	outputDay = `${day} ${date} ${month}`;
	return {
		time,
		UTC,
		outputDay,
	};
};
