import Image from "next/image";
import React from "react";
import Footer from "./components/footer";
import Introduction from "./components/Introduction";
import Video from "./components/video";
import Description from "./components/Description";
import Solutions from "./components/Solutions";
import Scale from "./components/Scale";
import AsesorInmobi from "./components/AsesorInmobi";
import Register from "./components/Register";
import FinalPage from "./components/FinalPage";
export default function Home() {
	return (
		<>
			<Footer />
			<section className="max-w-6xl mx-auto px-4 sm:px-6">
				<Introduction />
				<Video />
			</section>
			<Description />
			<Solutions />
			<Scale />
			<AsesorInmobi />
			<Register />
			<FinalPage />
		</>
	);
}
