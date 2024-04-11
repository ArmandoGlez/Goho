import Image from "next/image";
import React from "react";
import MapaGoho from "../../public/mapa.png";
import { inter } from "../fonts/fontsGoogle";

export default function Scale() {
	return (
		<>
			<section>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="py-12 md:py-20">
						<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
							<h1 className={`${inter.className} antialiased text-[41px] mb-4`}>
								Escala tu negocio como nunca antes
							</h1>
							<p className={` text-xl text-gray-600`}>
								Expande tu negocio, rompe fronteras y crece más allá de tu
								ciudad con herramientas innovadoras para alcanzar mercados más
								amplios
							</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="relative">
								<Image src={MapaGoho} width={697} height={500} alt="Mapa" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
