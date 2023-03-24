import Mainpost from "@/components/Mainpost";
import Navbar from "@/components/Navbar";
import Postitem from "@/components/Postitem";
import User from "@/components/user";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Admin() {
	const [user, setuser] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5000/api/v1/users/", { withCredentials: true })
			.then((res) => {
				console.log(res.data.users);
				setuser(res.data.users);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<Navbar />
			<section className="pt-20 flex flex-wrap px-8 gap-x-6 gap-y-10">
				{user.map((a) => (
					<User
						key={a._id}
						user={a}
					/>
				))}
			</section>
		</div>
	);
}

export default Admin;
