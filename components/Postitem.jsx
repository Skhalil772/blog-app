import Image from "next/image";
import Link from "next/link";
import React from "react";

function Postitem({ data }) {
	function formatDate(dateStr) {
		const date = new Date(dateStr);
		const options = { weekday: "long", month: "long", day: "numeric" };
		const formattedDate = date.toLocaleDateString("en-US", options);
		const suffix = getOrdinalSuffix(date.getDate());
		const year = date.getFullYear();
		return `${formattedDate}${suffix} ${year}`;
	}

	function getOrdinalSuffix(date) {
		if (date > 3 && date < 21) return "th";
		switch (date % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}
	const date = formatDate(data.date);

	const strg =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias provident possimus assumenda velit, quis expedita enim fugit sed magnam, nam maxime ipsa nihil optio dolor? Earum labore natus libero rerum, aliquam, error praesentium molestiae magni reprehenderit assumenda minus alias ipsa ullam nulla sequi illum excepturi, ipsam recusandae exercitationem! Sed, minima.";

	return (
		<section className="bg-black/90 text-white rounded-2xl">
			<div className="relative h-64 md:h-60 lg:h-52 xl:h-60 ">
				{data.image ? (
					<div
						className="relative w-full h-0"
						style={{ paddingBottom: "56.25%" }}>
						<Image
							src={data.image}
							alt="Description of the image"
							fill
							cover
							className="flex justify-center rounded-t-2xl"
						/>
					</div>
				) : (
					// <Image
					// 	className="rounded-2xl"
					// 	src={data.image}
					// 	alt="Blog image"
					// 	fill
					// 	priority
					// />
					<p className="text-blue-500 flex items-center justify-center">
						No Image Available
					</p>
				)}
			</div>
			<div className="px-2 py-4 text-center flex flex-col gap-2">
				<p>{date}</p>
				<p>{data.title}</p>
				<Link
					className="bg-white text-black px-3 py-1 w-fit mx-auto rounded-md duration-500"
					href={`/posts/${data._id}`}>
					Read Post
				</Link>
			</div>
		</section>
	);
}

export default Postitem;
