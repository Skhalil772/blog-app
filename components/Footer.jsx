import React from "react";
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function Footer() {
	return (
		<section className="py-12 container mx-auto px-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20">
			<div className=" flex gap-4">
				<button className="hover:scale-110 duration-500">
					<BsTwitter size={40} />
				</button>
				<button className="hover:scale-110 duration-500">
					<AiOutlineInstagram size={40} />
				</button>
				<button className="hover:scale-110 duration-500">
					<AiFillFacebook size={40} />
				</button>
				<button className="hover:scale-110 duration-500">
					<AiOutlineWhatsApp size={40} />
				</button>
			</div>
			<div className="font-bold text-center text-3xl">
				<p className="font-bold text-3xl">KELVIN WRITES</p>
				<p>Copyright © 2023 KELVIN WRITES</p>
			</div>
		</section>
	);
}

export default Footer;
