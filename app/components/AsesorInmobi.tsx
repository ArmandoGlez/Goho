"use client";
import React, { useState } from "react";
import Tutorial1 from "../../public/turorial1.jpg";
import Tutorial2 from "../../public/tutorial2.png";
import Tutorial3 from "../../public/tutorial3.jpg";
import Tutorial5 from "../../public/tutorial5.png";
import Tutorial8 from "../../public/tutorial8.jpg";
import Image from "next/image";
import Jorge from "../../public/Jorge.png";
import Roberto from "../../public/Roberto.png";
import Erick from "../../public/Erick.png";
export default function AsesorInmobi() {
	const [showArticle1, setShowArticle1] = useState(true);
	const [showArticle2, setShowArticle2] = useState(false);
	const [showArticle3, setShowArticle3] = useState(false);

	const articles = [
		{
			id: 1,
			title: "¿Cómo me registro en Goho?",
			author: "Jorge García",
			imageUrl: Tutorial1,
			authorImage: Jorge,
		},
		{
			id: 2,
			title: "¿Qué tipo de membresías existen y no funcionan?",
			author: "Roberto Legorreta",
			imageUrl: Tutorial2,
			authorImage: Roberto,
		},
		{
			id: 3,
			title: "¿Cómo el sistema posiciona tu cartera inmobiliaria?",
			author: "Erick Tiznado",
			imageUrl: Tutorial3,
			authorImage: Erick,
		},
	];

	const articles2 = [
		{
			id: 1,
			title: "¿Qué tipo de membresías existen y no funcionan?",
			author: "Roberto Legorreta",
			imageUrl: Tutorial2,
			authorImage: Jorge,
		},
		{
			id: 2,
			title: "¿Cómo el sistema posiciona tu cartera inmobiliaria?",
			author: "Erick Tiznado",
			imageUrl: Tutorial3,
			authorImage: Roberto,
		},
		{
			id: 3,
			title: "Registrar prospectos",
			author: "Erick Tiznado",
			imageUrl: Tutorial5,
			authorImage: Erick,
		},
	];

	return (
		<>
			<section>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="py-12 md:py-10">
						<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
							<h2 className={` font-bold text-black text-[42px]`}>
								La mejor manera de llevar los negocios inmobiliarios
							</h2>
						</div>

						{/* Categorias */}

						<div className="mb-12 md:mb-16">
							<ul className="flex flex-wrap justify-center text-sm font-medium -m-2">
								{["Todos", "Asesores", "Inmobiliaria", "Personal"].map(
									(item, index) => (
										<li key={index} className="m-2">
											<p
												className={`inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:text-[#15a89b] hover:bg-gray-100 shadow-md transition duration-150 ease-in-out`}
												onClick={() => {
													if (item === "Todos") {
														setShowArticle1(true);
														setShowArticle2(false);
														setShowArticle3(false);
													} else if (item === "Asesores") {
														setShowArticle1(true);
														setShowArticle2(false);
														setShowArticle3(false);
													} else if (item === "Inmobiliaria") {
														setShowArticle1(false);
														setShowArticle2(true);
														setShowArticle3(false);
													} else if (item === "Personal") {
														setShowArticle1(false);
														setShowArticle2(false);
														setShowArticle3(true);
													}
												}}
											>
												{item}
											</p>
										</li>
									)
								)}
							</ul>
						</div>
						{/* TODOS */}
						{showArticle1 && (
							<div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
								{articles.map((article) => (
									<article key={article.id} className="flex flex-col h-full">
										<header>
											<a
												href="/blog/tutorial_registro_goho"
												className="block mb-6"
											>
												<figure className="relative h-32 lg:h-44 overflow-hidden translate-z-0 rounded">
													<Image
														src={article.imageUrl}
														width={352}
														height={198}
														alt={article.title}
													/>
												</figure>
											</a>

											<div className="mb-3">
												<ul className="flex flex-wrap text-xs font-medium -m-1">
													<li className="m-1">
														<a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-[#15a89b] hover:bg-blue-600 transition duration-150 ease-in-out">
															Todos
														</a>
													</li>
												</ul>
											</div>
											<h3 className="text-xl font-bold leading-snug tracking-tight  mb-3 h-8">
												<a href="/blog/tutorial_registro_goho">
													{article.title}
												</a>
											</h3>
										</header>
										<footer className="text-sm flex items-center mt-4">
											<div className="flex shrink-0 mr-3">
												<a className="relative">
													<span className="absolute inset-0 -m-px">
														<span className="absolute inset-0 -m-px bg-white rounded-full"></span>
													</span>
													<Image
														src={article.authorImage}
														width={32}
														height={32}
														alt={article.author}
														className="relative rounded-full"
													/>
												</a>
											</div>
											<div>
												<span className="text-gray-600">por</span>
												<a className="font-medium hover:underline" href="#0">
													{article.author}
												</a>
											</div>
										</footer>
									</article>
								))}
							</div>
						)}

						{/* ASESORES */}

						{showArticle2 && (
							<div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
								{articles2.map((article) => (
									<article key={article.id} className="flex flex-col h-full">
										<header>
											<a
												href="/blog/tutorial_registro_goho"
												className="block mb-6"
											>
												<figure className="relative h-32 lg:h-44 overflow-hidden translate-z-0 rounded">
													<Image
														src={article.imageUrl}
														width={352}
														height={198}
														alt={article.title}
													/>
												</figure>
											</a>

											<div className="mb-3">
												<ul className="flex flex-wrap text-xs font-medium -m-1">
													<li className="m-1">
														<a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-[#15a89b] hover:bg-blue-600 transition duration-150 ease-in-out">
															Todos
														</a>
													</li>
												</ul>
											</div>
											<h3 className="text-xl font-bold leading-snug tracking-tight  mb-3 h-8">
												<a href="/blog/tutorial_registro_goho">
													{article.title}
												</a>
											</h3>
										</header>
										<footer className="text-sm flex items-center mt-4">
											<div className="flex shrink-0 mr-3">
												<a className="relative">
													<span className="absolute inset-0 -m-px">
														<span className="absolute inset-0 -m-px bg-white rounded-full"></span>
													</span>
													<Image
														src={article.authorImage}
														width={32}
														height={32}
														alt={article.author}
														className="relative rounded-full"
													/>
												</a>
											</div>
											<div>
												<span className="text-gray-600">por</span>
												<a className="font-medium hover:underline" href="#0">
													{article.author}
												</a>
											</div>
										</footer>
									</article>
								))}
							</div>
						)}

						{/* PERSONAL */}

						{showArticle3 && (
							<div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
								<article className="flex flex-col h-full">
									<header>
										<a
											href="/blog/tutorial_registro_goho"
											className="block mb-6"
										>
											<figure className="relative h-32 lg:h-44 overflow-hidden translate-z-0 rounded">
												<Image
													src={Tutorial8}
													width={352}
													height={198}
													alt="Tutorial 1"
												/>
											</figure>
										</a>

										<div className="mb-3">
											<ul className="flex flex-wrap text-xs font-medium -m-1">
												<li className="m-1">
													<a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-[#15a89b] hover:bg-blue-600 transition duration-150 ease-in-out">
														Personal
													</a>
												</li>
											</ul>
										</div>
										<h3 className="text-xl font-bold leading-snug tracking-tight  mb-3 h-8">
											<a href="/blog/tutorial_registro_goho">
												Inmuebles de mi interés
											</a>
										</h3>
									</header>
									<footer className="text-sm flex items-center mt-4">
										<div className="flex shrink-0 mr-3">
											<a className="relative">
												<span className="absolute inset-0 -m-px">
													<span className="absolute inset-0 -m-px bg-white rounded-full"></span>
												</span>
												<Image
													src={Jorge}
													width={32}
													height={32}
													alt="Jorge"
													className="relative rounded-full"
												/>
											</a>
										</div>
										<div>
											<span className="text-gray-600">por</span>
											<a className="font-medium hover:underline" href="#0">
												Jorge García
											</a>
										</div>
									</footer>
								</article>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
