import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

function Createpost() {
	const date = new Date().toJSON().slice(0, 10);

	const [Load, setLoad] = useState(false);
	const [Img, setImg] = useState(null);
	const [title, Settitle] = useState("");
	const [categories, Setcategories] = useState("");
	const [content, Setcontent] = useState("");
	const [user, Setuser] = useState("khalil");
	const [image, Setimage] = useState("");
	const [UploadingImage, setUploadingImage] = useState(true);
	const [UploadingPost, SetUploadingImagePost] = useState(true);

	const Data = {
		title,
		categories,
		content,
		date,
		user,
		image,
	};

	const formData = new FormData();
	formData.append("image", Img);
	const Upload = () => {
		setUploadingImage(true);
		axios
			.post("http://localhost:5000/api/v1/posts/uploads", formData)
			.then((res) => {
				setUploadingImage(false);

				console.log(res.data.image);
				Setimage(res.data.image);
			})
			.catch((err) => {
				setUploadingImage(false);
				console.log(err.response.data.msg);
			});
	};

	const editorRef = useRef(null);

	const CreatePost = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
			Setcontent(editorRef.current.getContent());
		}
		console.log(Data);
		axios
			.post("http://localhost:5000/api/v1/posts", Data)
			.then((res) => console.log(res))
			.catch((err) => console.log(err.response.data.msg));
	};
	const UploadBlogPost = () => {
		Upload();
		setTimeout(() => {
			CreatePost();
		}, 4000);
	};

	const op = `<ul>
	<li style="text-align: center;"><span style="background-color: rgb(22, 145, 121);"><em>Loving <strong>this stuff of the editor.</strong></em></span></li>
	</ul>`;
	// useEffect(() => {
	// 	Upload();
	// }, [Img]);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoad(false);
	// 	}, 3000);
	// }, []);

	return (
		<>
			<Head>
				<title>Create Blog Post</title>
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
			<Navbar />
			{Load ? (
				<p className="text-3xl font-bold">LOADING</p>
			) : (
				<div className="container mx-auto p-5">
					<section className="flex flex-col gap-6 lg:flex-row">
						<div className="lg:w-[65%]">
							<Editor
								onInit={(evt, editor) => (editorRef.current = editor)}
								apiKey="n9dhgymxiyxta56vobqhfmep2rr5fbf8fkysiduimvztt0sx"
								initialValue={op}
								init={{
									height: 400,
									menubar: false,
									plugins: [
										"a11ychecker",
										"advlist",
										"advcode",
										"advtable",
										"autolink",
										"checklist",
										"export",
										"lists",
										"link",
										"image",
										"charmap",
										"preview",
										"anchor",
										"searchreplace",
										"visualblocks",
										"powerpaste",
										"fullscreen",
										"formatpainter",
										"insertdatetime",
										"media",
										"table",
										"help",
										"wordcount",
									],
									toolbar:
										"undo redo | casechange blocks | bold italic backcolor | " +
										"alignleft aligncenter alignright alignjustify | " +
										"bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
									content_style:
										"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
								}}
							/>
						</div>
						<div className=" flex gap-5 flex-col items-center  lg:w-[35%]">
							<div className="w-full">
								<input
									onChange={(e) => Settitle(e.target.value)}
									type="text"
									id="simple-search"
									className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full   py-1 px-3 placeholder:text-gray-600  "
									placeholder="Post Title"
									required
								/>
							</div>
							<div className="flex flex-col  pb-4 w-full  ">
								<label htmlFor="countries">Select Categories</label>

								<select
									onChange={(e) => Setcategories(e.target.value)}
									id="countries"
									className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-1  ">
									<option value="poetry">POETRY</option>
									<option value="comedy">COMEDY</option>
									<option value="prose">PROSE</option>
									<option value="fiction">FICTION</option>
								</select>
							</div>

							<div className="w-full">
								<label
									className="block mb-2 text-sm font-medium  text-gray-900 "
									htmlFor="multiple_files">
									Upload multiple files
								</label>
								<div className="flex gap-3">
									<input
										onChange={(e) => setImg(e.target.files[0])}
										className="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer  focus:outline-none bg-gray-600  dark:placeholder-gray-100"
										id="multiple_files"
										type="file"
									/>
									<>{UploadingImage && <p>loading</p>}</>
								</div>
							</div>
							{image && (
								<img
									className="w-80"
									src={image}
									alt="uploaded file"
								/>
							)}
						</div>
					</section>

					<button
						className="text-white bg-blue-600 max-w-xs flex gap-2 justify-center w-full mt-8 mx-auto px-3 py-1 rounded-xl"
						onClick={UploadBlogPost}>
						<span>Upload</span>
						{UploadBlogPost && <span>Loading</span>}
					</button>
				</div>
			)}
			<Footer />
		</>
	);
}

export default Createpost;
