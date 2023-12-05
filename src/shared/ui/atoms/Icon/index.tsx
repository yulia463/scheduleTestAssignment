import { createElement, FunctionComponent } from "react";
import { clsx } from "clsx";
import * as elements from "./elements";

import styles from "./styles.module.scss";

export type IconProps = {
	name: keyof typeof elements,
	size?: "xs" | "s" | "m" | "l",
	className?: string,
	onClick?: (e: React.MouseEvent<HTMLButtonElement, HTMLSpanElement>) => void,
}

export const Icon: FunctionComponent<IconProps> = ({ onClick, name, size = "s", className }) => {
	const Element = elements[name];
	const rootElement = onClick ? "button" : "span";

	return (
		createElement(
			rootElement,
			{
				className: clsx(styles.iconBox, className),
				"data-size": size,
				onClick
			},
			<Element />
		)
	);
};