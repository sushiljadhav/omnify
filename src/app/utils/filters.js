export const filterList = [
	{
		name: "Scheduled Date",
		key: "scheduledDate",
		icon: "calendar-filter",
		isActive: true,
	},
	{
		name: "People",
		key: "people",
		icon: "users",
		isActive: false,
	},
	{
		name: "Services / Products",
		key: "servicesProducts",
		icon: "layout-dashboard",
		isActive: false,
	},
];

export const selectedFilters = {
	schedule: {
		showOrderFor: {
			name: "All",
			key: "all",
		},
		from: "",
		to: "",
	},
	payerData: [],
	servicesNames: [],
	servicesByTagName: {
		serviceType: {
			name: "",
			key: "",
		},
		serviceStatus: {
			name: "",
			key: "",
		},
	},
	columns: [],
};
