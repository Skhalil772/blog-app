import Mainpost from "@/components/Mainpost";
import Navbar from "@/components/Navbar";
import Postedit from "@/components/Postedit";
import Postitem from "@/components/Postitem";
import User from "@/components/user";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Admin({ posts }) {
	// const [user, setuser] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:5000/api/v1/users/", { withCredentials: true })
	// 		.then((res) => {
	// 			console.log(res.data.users);
	// 			setuser(res.data.users);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);
	return (
		<div>
			<Navbar />
			<section className="flex flex-wrap gap-4 justify-around container px-6 my-8 pt-8">
				<div className="font-semibold text-xl p-2">
					<span>Number of Posts</span> <span>:</span>{" "}
					<span>{posts.length}</span>
				</div>
				<div className="font-semibold text-xl p-2">
					<span>Number of Posts</span> <span>:</span>{" "}
					<span>{posts.length}</span>
				</div>
				<div className="font-semibold text-xl p-2">
					<span>Number of Posts</span> <span>:</span>{" "}
					<span>{posts.length}</span>
				</div>
			</section>
			<section className="container mx-auto px-6 mb-10 ">
				{posts.length > 0 ? (
					<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
						{posts.map((a) => (
							<Postedit
								data={a}
								key={a._id}
							/>
						))}
					</main>
				) : (
					<p className=" text-2xl text-center text-blue-500 font-semibold p-4">
						There are currently no posts
					</p>
				)}
			</section>
		</div>
	);
}

export default Admin;
export async function getServerSideProps() {
	const res = await axios.get("http://localhost:5000/api/v1/posts");
	const posts = await res.data;

	return {
		props: {
			posts,
		},
	};
}
