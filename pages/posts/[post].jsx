import Mainpost from "@/components/Mainpost";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
export function getStaticPaths() {
	// const router = useRouter();
	// if (router.isFallback) {
	// 	return <div>Loading...</div>;
	// }

	// const res = await axios.get(
	// 	`http://localhost:5000/api/v1/posts/${router.query.post}`
	// );
	// const posts = await res.data;

	// const paths = posts.map((item) => ({
	// 	params: { post: item._id },
	// }));
	const paths = [{ params: { post: "6400f3f4425079dd49816380" } }];

	return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
	const data = await axios(
		`http://localhost:5000/api/v1/posts/${params?.post}`
	);
	// const data = await res.json();
	console.log(data);

	return { props: { data } };
}
function post({ data }) {
	// const router = useRouter();
	// const { category } = router.query;
	// console.log(router.query.post);
	// if (router.isFallback) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<>
			<Head>
				<title>BLOG</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<div>
				{/* <Mainpost data={data} /> */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque
				porro alias aut a. Consequatur repellat ipsa quae animi architecto. Eum
				numquam non voluptatibus dolore autem architecto dolores similique hic
				iusto, amet id ratione sapiente, minus itaque, beatae saepe error
				reprehenderit. Enim autem eveniet commodi quam voluptatibus magni! Ea,
				odio.
			</div>
		</>
	);
}

export default post;
