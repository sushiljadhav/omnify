import React from "react";

function Summary() {
	const SummaryBoxUI = ({ title, total, isActive }) => {
		return (
			<div
				className={`flex py-2.5 px-3 items-center gap-1.5 border border-slate-200 max-w-[350px] w-full rounded-md`}
				style={{
					borderColor: `${isActive ? "#64748B" : "#E2E8F0"}`,
				}}
			>
				<h6 className="text-xs text-textColor font-semibold">
					{title}
				</h6>
				<span className="text-xxs text-textThirdColor font-medium">
					{total}
				</span>
			</div>
		);
	};

	return (
		<div className="flex items-center gap-[15px] mb-4">
			<SummaryBoxUI title={"All Waitlists"} total={100} isActive={true} />
			<SummaryBoxUI title={"Newly Added"} total={50} isActive={false} />
			<SummaryBoxUI title={"Leads"} total={20} isActive={false} />
		</div>
	);
}

export default Summary;
