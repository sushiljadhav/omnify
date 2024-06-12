"use client";
import React, { createContext, useState } from "react";
import { selectedFilters as initialFilters } from "../utils/filters";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
	const [filters, setFilters] = useState(initialFilters);

	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};
