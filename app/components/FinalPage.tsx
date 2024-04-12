import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoGoho from "../../public/logo-goho.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FinalPage() {
	return (
		<>
			<footer>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid sm:grid-cols-12 gap-6 py-8 md:py-12 border-t border border-l-0 border-r-0 border-[#15A89B]">
						<div className="sm:col-span-12 lg:col-span-3">
							<div className="mb-2">
								<Link href={"/"}>
									<Image
										src={LogoGoho}
										alt="Goho"
										width={80}
										height={50}
										className="text-transparent"
									/>
								</Link>
							</div>
							<div className="text-sm text-gray-600">
								<Link
									href={"avisoPrivacidad"}
									className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
								>
									Términos y condiciones
								</Link>
								<br></br>
								<Link
									href={"avisoPrivacidad"}
									className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
								>
									Aviso de privacidad
								</Link>
							</div>
						</div>
						<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
							<h6 className="text-gray-800 font-medium mb-2">Herramientas</h6>
							<ul className="text-sm">
								<li className="mb-2">
									<Link
										href={"/tutorials"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Tutoriales
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={"/blog"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
							<h6 className="text-gray-800 font-medium mb-2">Membresías</h6>
							<ul className="text-sm">
								<li className="mb-2">
									<Link
										href={"#"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Plus
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={"#"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Pro
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={"#"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Premium
									</Link>
								</li>
							</ul>
						</div>

						<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
							<h6 className="text-gray-800 font-medium mb-2">Compañía</h6>
							<ul className="text-sm">
								<li className="mb-2">
									<Link
										href={"/"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Inicio
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={"#"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Beneficios
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={"#"}
										className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									>
										Contactanos
									</Link>
								</li>
							</ul>
						</div>
						<div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
							<h6 className="text-800 font-medium mb-2 text-[#15A89B]">
								Suscríbete
							</h6>
							<p className="text-sm text-gray-600 mb-4">
								Recibe noticias y artículos nuevos
							</p>
							<form
								role="form"
								action="https://formsubmit.co/eliasbetanoz27@gmail.com"
								method="post"
								target="_blank"
							>
								<div className="flex flex-wrap mb-4">
									<div className="w-full">
										<label className="block text-sm sr-only">Email</label>
										<div className="relative flex items-center max-w-xs">
											<input
												type="email"
												className="form-input border border-[#15A89B] rounded-md h-11 w-full text-gray-900 px-3 py-2 pr-12 text-sm"
												placeholder="Ingresa tu correo"
												required
												name="email"
											/>
											<button
												type="submit"
												className="absolute inset-0 left-auto"
												aria-label="Suscribete"
											>
												<span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"></span>
												<ArrowForwardIcon
													className="w-4 h-4 text-[#15A89B]  mx-3 "
													aria-hidden="true"
												/>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div
					className="md:flex md:items-center md:justify-between py-4 md:py-8 
				"
				></div>
			</footer>
		</>
	);
}
