import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
export default function Home() {
	return (
		<>
			<main className="flex h-screen">
				<Sidebar />
				<div className="flex-1">
					<Dashboard />
				</div>
			</main>
		</>
	);
}
