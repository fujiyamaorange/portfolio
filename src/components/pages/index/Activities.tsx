import { Activity } from "@/types/activity";
import { KeyboardEvent } from "react";

type Props = {
	activities: Activity[];
};

const jumpLink = (url: string) => {
	window.open(url, "_blank");
};

const handleKeyDown = (event: KeyboardEvent<HTMLElement>, link: string) => {
	if (event.key === "Enter") {
		jumpLink(link);
	}
};

export const Activities = (props: Props) => {
	const activities = props.activities;

	return (
		<section className="flex flex-col mx-4 mb-16 text-white sm:w-3/4 sm:mx-auto sm:mb-48">
			<div className="flex flex-col items-center justify-center selection:bg-transparent">
				<span className="mt-4 mb-8 text-3xl font-semibold selection:bg-white selection:text-black">
					OSS Activities
				</span>
			</div>
			<div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
				{activities.map((activity, i) => (
					<article
						key={activity.link}
						className="px-8 py-4 transition duration-150 hover:scale-105 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
						onClick={() => jumpLink(activity.link)}
						onKeyUp={(e) => handleKeyDown(e, activity.link)}
						tabIndex={0}
					>
						<div className="sm:flex sm:flex-col sm:justify-between sm:h-full">
							<div>
								<div className="flex items-center gap-4 mb-4">
									{activity.repository ?? ""}
								</div>
								<img
									className="mt-2"
									src={activity.ogpUrl ?? "/no_image.png"}
									alt=""
								/>
								<p
									// dangerouslySetInnerHTML={{
									// 	__html: activity.details?.substring(0, 240) ?? "",
									// }}
									className="hidden mt-4 text-sm text-gray-400 sm:block"
								>
									{activity.details?.substring(0, 240) ?? ""}
								</p>
							</div>
							<p className="text-sm text-gray-400 text-end">{activity.date}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
