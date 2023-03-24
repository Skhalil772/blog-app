import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setSecret] = useState("");
	const [password, setPassword] = useState("");
	const [Cpassword, setCpassword] = useState("");
	const [load, setload] = useState(false);
	const [err, seterr] = useState("");
	const [msg, setmsg] = useState("");

	const URL = process.env.URL;

	const Submit = (e) => {
		e.preventDefault();

		if (Cpassword != password) {
			alert("Password does not match");
		} else {
			setload(true);
			seterr("");
			setmsg("");
			axios
				.post(
					"http://localhost:5000/api/v1/auth/register",
					{
						name,
						email,
						password,
						number,
					}
					// JSON.stringify({ name, email, number, password })
				)
				.then((res) => {
					console.log(res.data.msg);
					setload(false);
					seterr("");
					setmsg(res.data.msg);
				})
				.catch((err) => {
					setload(false);
					console.log(err.response);
					seterr(err.response.data.msg);

					setmsg("");
				})
				.finally(() => {
					setCpassword("");
					setEmail("");
					setName("");
					setPassword("");
					setSecret("");
					setTimeout(() => {
						setload(false);
						seterr("");
						setmsg("");
					}, 6000);
				});
		}
	};
	return (
		<>
			<Navbar />
			<section className="px-8">
				<form
					onSubmit={Submit}
					className="bg-black/10 mt-20  rounded-2xl flex flex-col space-y-3  max-w-lg mx-auto p-8">
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
							htmlFor="name">
							Name
						</label>
						<input
							required
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							placeholder="Name"
							id="name"
							className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 outline-1 outline-none"
							type="text"
						/>
					</div>
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
							className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 outline-1 outline-none"
							type="email"
						/>
					</div>
					<div className="flex flex-col ">
						<label
							className="uppercase font-semibold pl-2 "
							htmlFor="secret">
							Password Recovery Secret String
						</label>
						<input
							required
							value={number}
							onChange={(e) => {
								setSecret(e.target.value);
							}}
							id="secret"
							placeholder="Secret string e.g pet name or nickname"
							className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 outline-1 outline-none"
							type="text"
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
							maxLength={9}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder="Password"
							id="pass"
							className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 outline-1 outline-none"
							type="text"
						/>
					</div>
					<div className="flex flex-col ">
						<label
							className="uppercase font-semibold pl-2 "
							htmlFor="cpass">
							Confirm Password
						</label>
						<input
							required
							value={Cpassword}
							onChange={(e) => {
								setCpassword(e.target.value);
							}}
							placeholder="Confirm Password"
							id="cpass"
							className="text-gray-900 placeholder:text-gray-400 px-3 py-1 rounded-md focus:outline-blue-500 outline-1 outline-none"
							type="text"
						/>
					</div>
					<button
						className="bg-blue-500 text-white px-3 py-2 space-x-5 justify-center items-center  flex rounded-md"
						type="submit">
						<span>Register</span>
						{load && <span className="font-bold text-green-900">LOADING</span>}
					</button>
				</form>
			</section>
		</>
	);
}

export default Register;
