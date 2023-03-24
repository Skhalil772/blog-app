import Image from "next/image";
import Link from "next/link";
import React from "react";

function Postitem({ data }) {
	const strg =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias provident possimus assumenda velit, quis expedita enim fugit sed magnam, nam maxime ipsa nihil optio dolor? Earum labore natus libero rerum, aliquam, error praesentium molestiae magni reprehenderit assumenda minus alias ipsa ullam nulla sequi illum excepturi, ipsam recusandae exercitationem! Sed, minima.";
	const preview = strg.slice(30);
	const title =
		" Lorem ipsum dolor consectetur adipisicing elit. Debitis quoaccusantium eos! Beatae dolorum iure impedit ex?";
	return (
		<section className="bg-black/90 text-white rounded-2xl">
			<div className="relative h-64 md:h-60 lg:h-52 xl:h-60 ">
				{data.image ? (
					<Image
						className="rounded-2xl"
						src={data.image}
						alt="Blog image"
						fill
						priority
					/>
				) : (
					<p className="text-blue-500 flex items-center justify-center">
						No Image Available
					</p>
				)}
			</div>
			<div className="px-2 py-4 text-center flex flex-col gap-2">
				<p>{data.date}</p>
				<p>{data.title}</p>
				<Link
					className="bg-white text-black px-3 py-1 w-fit mx-auto rounded-md duration-500"
					href={`/posts/${data._id}`}>
					Read Post
				</Link>
			</div>
		</section>
		// <section className="    sm:px-0">
		// 	<main className="flex  md:flex-row items-center flex-col gap-2">
		// 		{/* <div className="relative h-52  lg:h-40  w-full sm:w-3/4 mx-auto lg:w-1/3 ">
		// 			<Image
		// 				className="rounded-2xl"
		// 				src="https://images.unsplash.com/photo-1677350840467-8ddd90f2141d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
		// 				alt="Blog image"
		// 				fill
		// 			/>
		// 		</div> */}
		// 		<div className="relative w-4/5 sm:w-3/4 lg:w-2/3 ">
		// 			<Image
		// 				className="rounded-2xl"
		// 				src="https://images.unsplash.com/photo-1677350840467-8ddd90f2141d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
		// 				alt="Blog image"
		// 				width={1920}
		// 				height={1080}
		// 			/>
		// 		</div>
		// 		<div className="w-full sm:w-3/4 lg:w-2/3">
		// 			<h3 className="font-semibold">
		// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eos
		// 				quis culpa praesentium quo aliquid.
		// 			</h3>
		// 			<div>
		// 				<p>{`${preview}...`}</p>
		// 				<span className="inline-block">Read more</span>
		// 			</div>
		// 		</div>
		// 	</main>
		// </section>
	);
}

export default Postitem;
