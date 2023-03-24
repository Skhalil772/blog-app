import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navmenu from "./Navmenu";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

function Navbar() {
	const cookies = new Cookies();
	const name = useSelector((state) => state.user.user);

	const [Open, setOpen] = useState(false);
	const [token, settoken] = useState(false);

	const log = cookies.get("refreshTokenJWT");
	// const pageLoadTokenTest = () => {
	// 	if (!log) {
	// 		settoken(false);
	// 	} else settoken(true);
	// };
	useEffect(() => {
		if (!log) {
			settoken(false);
		} else settoken(true);
	}, [log]);

	const logout = () => {
		cookies.remove("refreshTokenJWT");
		settoken(false);
	};
	const Toggle = () => {
		setOpen(!Open);
	};
	return (
		<section className=" mb-10">
			<main className=" fixed top-0 left-0 right-0 bg-gray-300 z-50 ">
				<div className="justify-between px-4 py-2 flex w-full">
					<div className="sm:hidden flex">
						<BiSearchAlt2 size={25} />
					</div>
					<span>{name}</span>
					<div className="hidden space-x-6 sm:flex items-center">
						<Link
							className="text-sm font-medium"
							href="/">
							Home
						</Link>
						{/* <Navmenu /> */}
						<Link
							className="text-sm font-medium"
							href="/posts">
							Posts
						</Link>
						<Link
							className="text-sm font-medium"
							href="/about">
							About
						</Link>

						{token ? (
							<button
								onClick={logout}
								className="text-sm font-medium">
								Logout
							</button>
						) : (
							<Link
								className="text-sm font-medium"
								href="/login">
								Login
							</Link>
						)}
						<BiSearchAlt2 size={25} />
					</div>
					<button
						className="flex sm:hidden duration-1000 "
						onClick={Toggle}>
						{Open ? <FaTimes size={25} /> : <FaBars size={25} />}
					</button>
				</div>
				<hr className="border-b-2  border-black" />
			</main>
			<aside className="sm:hidden">
				<div
					className={`z-10 duration-1000 p-10  fixed top-10 left-0 right-0 bottom-0 ${
						Open ? "bg-blue-500 " : " bg-green-400 translate-x-full "
					}`}>
					<div className="flex space-y-10 sm:hidden flex-col justify-center items-center">
						<Link
							className="text-sm font-medium"
							href="/">
							Home
						</Link>
						<Navmenu />
						<Link
							className="text-sm font-medium"
							href="/register">
							Register
						</Link>
						{token ? (
							<button
								onClick={logout}
								className="text-sm font-medium">
								Logout
							</button>
						) : (
							<Link
								className="text-sm font-medium"
								href="/login">
								Login
							</Link>
						)}
					</div>
				</div>
			</aside>
		</section>
	);
}

export default Navbar;
