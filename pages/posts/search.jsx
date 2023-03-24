import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

function search() {
	const router = useRouter();
	console.log(router.query.q);

	return (
		<>
			<Navbar />
			<p className="text-5xl font-bold mt-20">{router.query.q}</p>
		</>
	);
}

export default search;
