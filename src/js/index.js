//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { TrafficLight } from "./component/TrafficLights.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import Home from "./component/home.jsx";
const Inicio = () => {
	return (
		<React.Fragment>
			<TrafficLight />,
		</React.Fragment>
	);
};

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Inicio />, document.querySelector("#app"));
