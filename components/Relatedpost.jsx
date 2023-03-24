import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

function Relatedpost() {
	const title =
		" Lorem ipsum dolor consectetur adipisicing elit. Debitis quoaccusantium eos! Beatae dolorum iure impedit ex?";
	return (
		<div className=" bg-black text-white rounded-2xl p-2">
			<div className="px-2 py-4 text-center flex flex-col gap-2">
				<div className="flex xl:flex-row md:flex-col flex-row  text-center items-center justify-center space-x-4 xs:font-medium text-xs xs:text-sm">
					<span>Sept. 30,2022</span>
					<span className="xl:flex md:hidden flex">|</span>
					<span className="flex items-center space-x-2">
						<AiOutlineClockCircle />
						<span> 2 Mins Read</span>
					</span>
					<span className="xl:flex md:hidden flex">|</span>
					<span> by Hussy</span>
				</div>{" "}
				<p> {title}</p>
				<Link
					className="bg-white text-black px-3 py-1 w-fit mx-auto rounded-md duration-500"
					href={`/posts/${title}`}>
					Read Post
				</Link>
			</div>
		</div>
	);
}

export default Relatedpost;
