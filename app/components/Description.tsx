"use client";
import React, { useState } from "react";
import { inter, inter2, inter4 } from "../fonts/fontsGoogle";
import Image from "next/image";
import TableGoho from "../../public/tables-goho.png";
import TableElement1 from "../../public/table-element-1.png";
import TableElement2 from "../../public/table-element-2.png";
import TableElement3 from "../../public/table-element-3.png";

export default function Description() {
	const [activeElement, setActiveElement] = useState<number>(1);

	const elements = [
		{
			title: "Herramientas para propiedades",
			description:
				"Registra, actualiza y promociona inmuebles eficientemente. La plataforma facilita el seguimiento de ventas y alquileres, optimizando la administración inmobiliaria.",
			image: TableElement1,
		},
		{
			title: "Herramientas para clientes",
			description:
				"Proporciona herramientas para el seguimiento de prospectos, permitiendo a los usuarios registrar, gestionar y analizar clientes potenciales de manera eficiente y organizada.",
			image: TableElement2,
		},
		{
			title: "Control de asesores",
			description:
				"Facilita la gestión de equipos, sigue el desempeño y verifica las actividades, todo centralizado y accesible.",
			image: TableElement3,
		},
	];

	const handleButtonClick = (index: number) => {
		setActiveElement(index);
	};

	return (
		<section className="relative mt-20">
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none mb-16 "
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h1
							className={`${inter.className} md:text-[40px]  antialiased text-black mb-5 text-3xl`}
						>
							Automatiza, organiza y conecta
						</h1>
						<p
							className={`${inter2.className} antialiased text-[19px] lg:text-xl text-gray-600 leading-relaxed `}
						>
							Alcanza la eficiencia y éxito inmobiliario: el control de
							inventario más eficiente ahora en tus manos.
						</p>
					</div>
					<div className="pb-12 md:pb-12">
						<Image
							src={TableGoho}
							alt="Table goho"
							loading="lazy"
							width={1104}
							height={390}
							className="text-transparent bg-transparent"
						/>
					</div>

					{/* Seccion de Conectividad */}
					<div className="md:flex md:gap-6">
						{/* Contenido a la izquierda  */}

						<div className="md:w-1/2 mb-8 md:mb-0">
							<div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
								<h3
									className={`${inter4.className} antialiased mb-3 text-3xl text-black`}
								>
									Conectividad total, Innovación para tu inmobiliaria
								</h3>
								<p
									className={`${inter2.className} antialiased text-xl text-gray-600`}
								>
									Revolucionando la gestión inmobiliaria al facilitar
									operaciones ágiles y centralizadas. Es la clave para una
									administración inmobiliaria moderna y eficiente.
								</p>
							</div>

							{/* Renderización de botones */}

							{elements.map((element, index) => (
								<button
									key={index}
									className={`text-left flex items-center text-lg p-6 rounded-lg border transition duration-300 ease-in-out mb-4 bg-white shadow-md border-gray-200  hover:shadow-lg ${
										activeElement === index ? "bg-gray-400" : ""
									}`}
									style={{ maxWidth: "570px" }}
									onClick={() => handleButtonClick(index)}
								>
									<div className="w-full mx-auto">
										{/* contenido  */}
										<div
											className={`${inter4.className} antialiased font-bold leading-snug tracking-tight mb-2`}
										>
											{element.title}
										</div>
										<div className="text-gray-600">{element.description}</div>
									</div>
								</button>
							))}
						</div>

						{/* Imagen  */}

						<div className="md:w-1/2">
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
								<div>
									<div
										className={`relative flex flex-col text-center lg:text-right aos-init aos-animate `}
									>
										<div className="w-full ">
											<Image
												src={elements[activeElement].image}
												alt={`Table element ${activeElement + 1}`}
												priority={true}
												width={530}
												height={316}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
