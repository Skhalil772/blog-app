import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import Navbar from "./Navbar";
import Postitem from "./Postitem";
import Relatedpost from "./Relatedpost";

function Mainpost({ data }) {
	console.log(data);
	const strg =
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beataeLorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cumrerum vitae dolore dignissimos accusamus totam quam beatae";
	function WordCount(str) {
		return str.split(" ").length;
	}
	const number = WordCount(strg);
	const mins = Math.ceil(number / 200);
	return (
		<>
			<Navbar />
			<main className="  mx-auto px-8 flex md:flex-row flex-col justify-between relative">
				<section className="md:w-[65%] mt-20">
					<div className="flex flex-col space-y-6">
						<h2 className="font-semibold">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias cum rerum vitae dolore dignissimos accusamus totam quam
							beatae ipsum! Quia!
						</h2>
						<div className="flex space-x-4 xs:font-medium text-xs xs:text-sm sm:text-lg">
							<span>September 30,2022</span>
							<span>|</span>
							<span className="flex items-center space-x-2">
								<AiOutlineClockCircle />
								<span> {`${mins} Mins Read`}</span>
							</span>
							<span>|</span>
							<span>Written by Hussy</span>
						</div>
						<div className="relative h-60 md:h-80 md:w-[70%]">
							<Image
								className="rounded-2xl"
								src="https://images.unsplash.com/photo-1677350840467-8ddd90f2141d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
								alt="Blog image"
								fill
							/>
						</div>
						<p>{strg}</p>
					</div>
				</section>
				<section className="md:w-[30%] sticky top-20 flex flex-col gap-8 w-full md:mt-20 ">
					<Relatedpost />
					<Relatedpost />
					<Relatedpost />
					<Relatedpost />
				</section>
			</main>
		</>
	);
}

export default Mainpost;