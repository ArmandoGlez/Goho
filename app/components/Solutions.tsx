import React from "react";
import { inter, inter2, inter4 } from "../fonts/fontsGoogle";
import WindowIcon from "@mui/icons-material/Window";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import ShareIcon from "@mui/icons-material/Share";

const solutionsData = [
	{
		icon: <WindowIcon className="text-white text-4xl" />,
		title: "Inventario digital",
		description:
			"Gestión eficiente y centralizada del inventario de propiedades en un clic.",
	},
	{
		icon: <AddHomeWorkIcon className="text-white text-4xl" />,
		title: "Gestión de propiedades",
		description:
			"Actualización y promoción eficiente de propiedades con detalles completos.",
	},
	{
		icon: <PersonAddAlt1Icon className="text-white text-4xl" />,
		title: "Registro de prospectos",
		description:
			"Captura eficiente de prospectos con detalles esenciales y preferencias.",
	},
	{
		icon: <SensorOccupiedIcon className="text-white text-4xl" />,
		title: "Control de asesores",
		description:
			"Administración integral de asesores: registro y seguimiento de desempeño.",
	},
	{
		icon: <EmergencyShareIcon className="text-white text-4xl" />,
		title: "Alertas de interés",
		description:
			"Notificaciones automáticas para agentes y usuarios según criterios de propiedad.",
	},
	{
		icon: <ShareIcon className="text-white text-4xl" />,
		title: "Integración de información",
		description:
			"Comparte listados de propiedades y actualizaciones fácilmente.",
	},
];

export default function Solutions() {
	return (
		<>
			<section className="relative">
				<div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 xl:top-1/2 left-0 right-0 bg-gray-200 pointer-events-none"></div>

				<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

				<div className="relative max-w-6xl xl:max-w-6xl mx-auto px-4 sm:px-6">
					<div className="py-12 md:py-20">
						<div className="max-w-3xl  mx-auto text-center pb-12 md:pb-20">
							<h2
								className={`${inter.className} antialiased text-center text-[33px] text-black mb-4`}
							>
								Soluciones inmobiliarias
							</h2>
							<p
								className={`${inter2.className} antialiased text-xl text-gray-600`}
							>
								Alcanza la eficiencia y éxito inmobiliario: el control de
								inventario más eficiente ahora en tus manos.
							</p>
						</div>

						<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
							{solutionsData.map((solution, index) => (
								<div
									key={index}
									className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
								>
									<span className="icon-container bg-[#10a79a] p-[8px] rounded-full mb-2">
										{solution.icon}
									</span>
									<h4
										className={`${inter4.className} antialiased text-black text-xl font-bold leading-snug tracking-tight mb-1`}
									>
										{solution.title}
									</h4>
									<p
										className={`${inter2.className} text-gray-600 text-center ${
											solution.title === "Alertas de interés"
												? "text-center"
												: ""
										}`}
									>
										{solution.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
