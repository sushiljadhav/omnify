import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
export default function Home() {
	return (
		<>
			<main className="flex h-screen">
				<div className="w-[228px]">
					<Sidebar />
				</div>
				<div className="flex-1">
					<Dashboard />
				</div>
			</main>
		</>
	);
}
