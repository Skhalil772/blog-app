import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function about() {
	return (
		<>
			<Navbar />
			<section className="container mx-auto px-6 py-20 items-center justify-center flex flex-col gap-12">
				<div className="flex space-x-3  items-center justify-center  ">
					<div className="border-b-4 border-black w-16 "></div>
					<span>About Me</span>
					<div className="border-b-4 border-black w-16 "></div>
				</div>
				<div className="h-40 w-40 rounded-full bg-blue-400"></div>
				<div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
						voluptatibus, quaerat explicabo hic at deleniti aut suscipit quod
						voluptatum sit! Nesciunt atque iusto labore porro, aspernatur
						repellat illum culpa soluta, perferendis quod maxime quis dolorum
						doloribus ad voluptatem animi voluptatibus nihil doloremque
						asperiores commodi id excepturi sequi adipisci voluptatum. Nobis
						fuga voluptatum accusantium deleniti consequuntur voluptatibus vero
						laudantium saepe, ipsa eveniet atque quaerat dolores iure voluptas
						provident. Repellat, nihil! Ut quae at suscipit excepturi tempore id
						expedita modi voluptates? Earum quibusdam similique amet sunt quidem
						beatae excepturi sit voluptatum iure maiores error nemo itaque eaque
						mollitia, numquam impedit minima nam ipsa dignissimos consectetur
						eligendi? Laudantium similique iure quia saepe quam maiores ad,
						sapiente eligendi repudiandae unde repellendus perferendis veniam,
						ex quisquam dolorem ratione dolor cumque et eius beatae
						perspiciatis. Facere optio beatae iure quas fugiat asperiores nemo
						quibusdam alias aliquid voluptate minus, ea tempore explicabo eos,
						placeat sit. Illum animi reiciendis temporibus, eaque repudiandae
						minima eligendi obcaecati rerum. Mollitia vero rerum qui amet, omnis
						inventore voluptatibus, tenetur iure eos, fugiat reprehenderit eius?
						Dignissimos eligendi dolor quidem enim consequatur fugit excepturi
						accusamus sed delectus? Magnam, nulla quidem aut quam perspiciatis
						officia. Vitae aliquid quis incidunt. Qui non corrupti laborum sunt
						sed!
					</div>
				</div>
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<p className="font-bold text-lg">Books</p>
						<ol className="list-item list-disc">
							<li>Lorem ipsum dolor sit.</li>
							<li>Lorem ipsum dolor sit amet consectetur.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Unde voluptatum incidunt consectetur corporis rerum</li>
							<li>Incidunt consectetur dolor </li>
						</ol>
					</div>
					<div>
						<p className="font-bold text-lg">Events</p>
						<ol className="list-item list-disc">
							<li>Lorem ipsum dolor sit.</li>
							<li>Lorem ipsum dolor sit amet consectetur.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Unde voluptatum incidunt consectetur corporis rerum</li>
							<li>Incidunt consectetur dolor </li>
						</ol>
					</div>
					<div>
						<p className="font-bold text-lg">Poetry</p>
						<ol className="list-item list-disc">
							<li>Lorem ipsum dolor. From sito polo,2020</li>
							<li>Sit amet consectetur. From Unra Sco ,2023</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Unde voluptatum incidunt consectetur corporis rerum. 2022</li>
							<li>voluptatum incidunt consectetur corporis. 2022 </li>
						</ol>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default about;
