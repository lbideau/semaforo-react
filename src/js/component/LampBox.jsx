import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const LampBox = props => {
	const [encendido, setEncendido] = useState(false);
	function cambiar() {
		console.log("Voy a cambiar");
		return setEncendido(!encendido);
	}
	return (
		<React.Fragment>
			<div
				className={`${props.color} lamp ${
					encendido ? "lamp:hover" : ""
				}`}
				onMouseOver={cambiar}></div>
		</React.Fragment>
	);
};

LampBox.propTypes = {
	color: PropTypes.string
};
