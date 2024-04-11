import React from "react";

export default function Register() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 ">
				<div className="pb-12 md:pb-15 ">
					<div className="bg-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl aos-init aos-animate bg-[#15a89b]">
						<div className="flex flex-col lg:flex-row justify-between items-center">
							<div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
								<h3 className="font-bold text-3xl text-white mb-2">
									Regístrate gratis
								</h3>
								<p className="text-white text-lg opacity-75">
									Únete a Goho y transforma tu experiencia inmobiliaria con la
									mejor tecnología.
								</p>
							</div>
							<div>
								<a className="block w-36 font-medium px-4 py-3 rounded-md text-center text-[#15a89b] bg-gradient-to-r from-blue-100 to-white">
									Comenzar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
