import React, { useState } from "react";
import Cookies from "universal-cookie";
import Spinner from "../public/spinner.gif";

import Navbar from "@/components/Navbar";
import loader from "@/components/loader";

import axios from "axios";
import Loader from "@/components/loader";

function Login() {
	const cookies = new Cookies();
	const longerExp = 1000 * 60 * 60 * 24 * 30;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [load, setload] = useState(false);
	const [err, seterr] = useState("");
	const [msg, setmsg] = useState("");

	const Submit = (e) => {
		e.preventDefault();
		setload(true);
		seterr("");
		setmsg("");
		axios
			.post(
				"http://localhost:5000/api/v1/auth/login",
				{
					email,
					password,
				}
				// JSON.stringify({ name, email, number, password })
			)
			.then((res) => {
				console.log(res.data.user, res.data.refreshTokenJWT);
				cookies.set("refreshTokenJWT", res.data.refreshTokenJWT, {
					path: "/",
					expires: new Date(Date.now() + longerExp),
				});
				setload(false);
				seterr("");
				setmsg(`You are Signed In as ${res.data.user.name}`);
			})
			.catch((err) => {
				setload(false);
				setmsg("");

				seterr(err.response.data.msg);
			})
			.finally(() => {
				setEmail("");
				setPassword("");
				setTimeout(() => {
					setload(false);
					seterr("");
					setmsg("");
				}, 6000);
			});
	};
	return (
		<>
			<Navbar />
			<form
				onSubmit={Submit}
				className="bg-black/10 px-8 mt-20 rounded-2xl flex flex-col space-y-3  max-w-lg mx-auto p-8">
				{err && (
					<p className="text-xl font-semibold uppercase text-center text-red-500">
						{err}
					</p>
				)}
				{msg && (
					<p className="text-xl font-semibold uppercase text-center text-green-500">
						{msg}
					</p>
				)}
				<div className="flex flex-col ">
					<label
						className="uppercase font-semibold pl-2 "
						htmlFor="email">
						Email
					</label>
					<input
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="Email"
						id="email"
						className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500  duration-1000 outline-2 outline-none"
						type="email"
					/>
				</div>

				<div className="flex flex-col ">
					<label
						className="uppercase font-semibold pl-2 "
						htmlFor="pass">
						Password
					</label>
					<input
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						id="pass"
						className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 duration-1000 outline-2 outline-none"
						type="text"
					/>
				</div>

				<button
					className="bg-blue-500 text-white px-3 py-2 space-x-5 justify-center items-center  flex rounded-md"
					type="submit">
					<span>Login</span>
					{load && <span className="font-bold text-green-900">LOADING</span>}
				</button>
			</form>
		</>
	);
}

export default Login;
