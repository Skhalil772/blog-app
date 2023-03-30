import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import Navbar from "./Navbar";
import Postitem from "./Postitem";
import Relatedpost from "./Relatedpost";
const parse = require("html-react-parser");
// import { formatDate } from "../../components/utils";

function Mainpost({ data }) {
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
	const strg = data.post.content;
	const date = formatDate(data.post.date);
	console.log(date);
	// function WordCount(str) {
	// 	return str.split(" ").length;
	// }
	// const number = WordCount(strg);
	// const mins = Math.ceil(number / 200);
	const mins = 7;

	return (
		<>
			<Navbar />
			<main className="  mx-auto px-8 flex md:flex-row flex-col justify-between relative">
				<section className="md:w-[65%] mt-20">
					<div className="flex flex-col space-y-6">
						<h2 className="font-semibold">{data.post.title}</h2>
						<div className="flex space-x-4 xs:font-medium text-xs xs:text-sm sm:text-lg">
							<span>{date}</span>
							<span>|</span>
							<span className="flex items-center space-x-2">
								<AiOutlineClockCircle />
								<span> {`${mins} Mins Read`}</span>
							</span>
							<span>|</span>
							<span className="capitalize">Written by {data.post.user}</span>
						</div>

						<div
							className="relative w-full h-0"
							style={{ paddingBottom: "56.25%" }}>
							<Image
								src={data.post.image}
								alt="Description of the image"
								fill
								cover
								className="flex justify-center"
							/>
						</div>
						<div>{parse(strg)}</div>
					</div>
				</section>
				<section className="md:w-[30%] sticky top-20 flex flex-col gap-8 w-full md:mt-20 ">
					<Relatedpost />
					<Relatedpost />
					<Relatedpost />
					<Relatedpost />
					<p></p>
				</section>
			</main>
		</>
	);
}

export default Mainpost;
