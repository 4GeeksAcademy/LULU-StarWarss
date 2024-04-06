import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Planetas from "./views/planetas";
import Planetas1 from "./views/planetas1";
import Naves from "./views/naves";
import Naves1 from "./views/naves1"
import People from "./views/people";
import People from "./views/people1"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} /> {/* Cartas con 3cards/opciones */}
						<Route path="/planetas" element={<Planetas/>}/> {/* todos los Planetas */}
						<Route path="/planetas1" element={<Planetas1/>}/>  {/* cada planeta segun le dan en la pagina anterior */}
						<Route path="/naves" element={<Naves/>}/>
						<Route path="/naves1" element={<Naves1/>}/>
						<Route path="/people" element={<People/>}/>
						<Route path="/people1" element={<People1/>}/>

						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
