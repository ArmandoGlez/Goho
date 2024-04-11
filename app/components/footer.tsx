"use client";
import React, { useState, useEffect } from "react";
import LogoGoho from "../../public/logo-goho.png";
import Image from "next/image";
import { inter2, inter3 } from "../fonts/fontsGoogle";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Footer() {
	const [showShadow, setShowShadow] = useState(false);

	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowShadow(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<footer
				className={`fixed z-30 top-0 px-5 inset-x-0 h-16 bg-white  ${
					showShadow ? "custom-shadow " : ""
				}`}
			>
				<div className="flex w-auto items-center justify-between h-16 md:p-4 ">
					<Image src={LogoGoho} width={76} height={37} alt="Logo Goho" />

					{/* PARA PANTALLAS MD */}

					<nav className="hidden md:flex md:grow">
						<ul className="flex grow justify-end flex-wrap items-center">
							<li>
								<Link
									href="/inicio"
									className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
								>
									Inicio
								</Link>
							</li>

							<li>
								<Link
									href="/blog"
									className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
								>
									Blog
								</Link>
							</li>

							<li>
								<Link
									href="/membresias"
									className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
								>
									Membresías
								</Link>
							</li>

							<li>
								<Link
									href="/tutoriales"
									className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
								>
									Tutoriales
								</Link>
							</li>

							<li>
								<Link
									href="/contacto"
									className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
								>
									Contacto
								</Link>
							</li>
						</ul>

						<ul className="flex grow justify-end flex-wrap items-center">
							<li>
								<a
									className="btn-sm text-gray-200 bg-[#15a89b] rounded-md hover:bg-gray-800 ml-3 "
									href="https://www.goho.mx/main/properties"
								>
									<span className="text-white mx-2">Ir a Goho</span>
								</a>
							</li>
						</ul>
					</nav>

					{/* PARA PANTALLAS SM */}

					<div className="md:hidden">
						<RxHamburgerMenu
							onClick={() => setShowButton(!showButton)}
							className="text-3xl"
						/>
					</div>
				</div>
			</footer>

			{/* Bloque del nav movil */}

			{showButton && (
				<nav
					className={`${
						showButton ? "animationNav" : "animationExitNav"
					} flex flex-col p-3 ml-2 bg-white z-20 h-full w-full fixed bottom-0`}
				>
					<ul>
						<li>
							<Link href="/">
								<p
									className={`${inter2.className} my-4 antialiased text-gray-600`}
								>
									Inicio
								</p>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<p
									className={`${inter2.className} my-5 antialiased text-gray-600`}
								>
									Blog
								</p>
							</Link>
						</li>
						<li>
							<Link href="/membresias">
								<p
									className={`${inter2.className} my-4 antialiased text-gray-600`}
								>
									Membresías
								</p>
							</Link>
						</li>
						<li>
							<Link href="/tutoriales">
								<p
									className={`${inter2.className} my-4 antialiased text-gray-600`}
								>
									Tutoriales
								</p>
							</Link>
						</li>
						<li>
							<Link href="/contacto">
								<p
									className={`${inter2.className} my-4 antialiased text-gray-600`}
								>
									Contacto
								</p>
							</Link>
						</li>
						<li>
							<Link href="/contacto">
								<button className="flex items-center justify-evenly mt-4 ml-0">
									<span
										className={`${inter3.className} transform translate-x-[-6px] mr-4 my-2 px-4 py-2 antialiased text-gray-100 bg-[#10a79a] rounded-md`}
									>
										Iniciar Sesión
									</span>
								</button>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
}
