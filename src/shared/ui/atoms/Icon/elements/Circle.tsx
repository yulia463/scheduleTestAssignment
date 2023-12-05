import React from "react";
import { Color } from "../../../../../common";

type CircleProps = {
	color: Color;
}
export const Circle: React.FC<CircleProps> = (props) => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="10" cy="10" r="10" fill={props.color}/>
	</svg>
);
