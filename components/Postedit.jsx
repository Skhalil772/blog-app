import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Postedit({ data }) {
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
	const deletePost = () => {
		window.confirm("Are you sure you want to delete this post?");
		console.log(`Delete post with id : ${data._id}`);
		axios
			.delete(`http://localhost:5000/api/v1/posts/${data._id}`)
			.then((res) => {
				window.confirm(res.data.msg);
				location.reload();
			})
			.catch((err) => {
				console.log(err.response.data.msg);
				window.alert(err.response.data.msg);
			});
	};

	const editPost = () => {
		console.log("Edit post");
	};

	return (
		<section className="bg-black/90 text-white rounded-2xl">
			<div className="relative h-fit ">
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
					<p className="text-blue-500 flex items-center justify-center min-h-[200px]">
						No Image Available
					</p>
				)}
			</div>
			<div className="px-2 py-4 text-center flex flex-col  gap-2">
				<p>{date}</p>
				<p>{data.title}</p>
				<div className="flex mt-4  gap-2 ">
					<button
						onClick={deletePost}
						className="bg-white text-black px-3 py-1 w-fit mx-auto rounded-md duration-500">
						Delete Post
					</button>
					<button
						onClick={editPost}
						className="bg-white text-black px-3 py-1 w-fit mx-auto rounded-md duration-500">
						Edit Post
					</button>
				</div>
			</div>
		</section>
	);
}

export default Postedit;
