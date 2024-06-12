import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import { FiltersProvider } from "../app/context/filtersContext";

export default function Home() {
	return (
		<FiltersProvider>
			<main className="flex h-screen">
				<Sidebar />
				<div className="flex-1">
					<Dashboard />
				</div>
			</main>
		</FiltersProvider>
	);
}
