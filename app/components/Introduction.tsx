import React from "react";
import { inter, inter2 } from "../fonts/fontsGoogle";

export default function Introduction() {
	return (
		<section className="flex flex-col justify-center items-center mt-28">
			<h1
				className={`${inter.className} antialiased text-center text-5xl md:text-8xl lg:text-7xl mb-4`}
			>
				Transforma tu mundo
			</h1>
			<h1
				className={`${inter.className} antialiased text-[#10a79a] text-center text-5xl md:text-8xl lg:text-7xl`}
			>
				Inmobiliario
			</h1>

			<div className="max-w-3xl mx-auto">
				<p
					className={`${inter2.className} antialiased mb-12 text-xl mt-6 text-center text-[#666666]`}
				>
					La gestión inmobiliaria simplificada, conectando agentes, propiedades
					y clientes con tecnología innovadora y eficiente.
				</p>
			</div>

			<div className="flex flex-col md:flex-row md:mx-auto justify-center items-center lg:w-96 w-80 md:w-96 gap-4">
				<a
					className="text-white text-center bg-[#10a79a]  p-3 md:max-w-xs rounded-md w-full"
					href="https://www.goho.mx/authentication/authentication"
				>
					Regístrate gratis
				</a>
				<a
					className="text-white text-center bg-[#191919] p-3 md:max-w-xs rounded-md w-full"
					href="https://www.goho.mx/authentication/authentication"
				>
					Conoce más
				</a>
			</div>
		</section>
	);
}
