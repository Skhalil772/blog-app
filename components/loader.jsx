import React from "react";

function Loader() {
	return (
		<div className="relative w-6 h-6 flex justify-center items-center">
			<svg
				className="spinner "
				viewBox="0 0 50 50">
				<circle
					className="path"
					stroke="black"
					cx="25"
					cy="25"
					r="10"
					fill="none"
					strokeWidth="5"></circle>
			</svg>
		</div>
	);
}

export default Loader;
