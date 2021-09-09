import React, { useState } from "react";
import { LampBox } from "./LampBox.jsx";
export const LightBox = () => {
	return (
		<React.Fragment>
			<div className="divFatherStick">
				<div className="stick"></div>
			</div>
			<div className="divFatherBox">
				<div className="Box">
					<LampBox color="green" />
					<LampBox color="yellow" />
					<LampBox color="red" />
				</div>
			</div>
		</React.Fragment>
	);
};
