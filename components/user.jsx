import React from "react";

function User({ user }) {
	return (
		<div className="relative bg-green-500/60 w-60  border-2 h-fit rounded-xl  px-4 pb-4">
			<span className="bg-orange-400 absolute w-12 h-12 flex items-center justify-center rounded-full left-1/2 -translate-y-1/2  -translate-x-1/2 ">
				SK
			</span>
			<p className=" mt-8 font-bold w-fit mx-auto ">{user.name}</p>
			<p
				className="text-red-600 my-4 font-semibold bg-orange-100/90
                 w-fit px-3  rounded-md mx-auto ">
				{user.role}
			</p>
			<p className=" mt-1 font-semibold w-fit mx-auto ">{user.email}</p>
		</div>
	);
}

export default User;
