import React, { createElement, FunctionComponent, PropsWithChildren } from "react";
import { clsx } from "clsx";
import styles from "./styles.module.scss";

type Props = PropsWithChildren<{
	size?: "s" | "m" | "l",
	as?: keyof JSX.IntrinsicElements
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const CardBox: FunctionComponent<Props> = ({ as = "section", size = "m", children, className, ...props }) => (
	createElement(
		as,
		{
			className: clsx(styles.box, className),
			"data-size": size,
			...props
		},
		children
	)
);
