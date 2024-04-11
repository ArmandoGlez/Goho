import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import LogoSesion from "../../public/goho-sesion.png";
import Image from "next/image";
import { inter3 } from "../fonts/fontsGoogle";

export default function Video() {
	return (
		<div className="relative flex flex-col justify-center items-center mt-10">
			<div className="flex flex-col justify-center">
				<Image src={LogoSesion} width={768} height={432} alt="Logo Sesion" />
			</div>
			<button className="absolute top-full transform -translate-y-1/2 flex flex-row items-center justify-center gap-2 bg-white shadow-lg rounded-full p-4">
				<FaRegPlayCircle className="text-gray-600 text-xl" />
				<span className={`${inter3.className}antialiased text-gray-600`}>
					Ver video
				</span>
			</button>
		</div>
	);
}
