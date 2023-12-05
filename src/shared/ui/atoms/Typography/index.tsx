import { clsx } from "clsx";
import { createElement, FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type BaseProps = PropsWithChildren<{
	kind?: "title1" | "title2" | "title3" | "title4" | "title5" | "text1" | "text2" | "text3",
	weight?: "regular" | "bold" | "semibold" | "medium",
	color?: "primary" | "secondary" | "ghost"
	as?: keyof JSX.IntrinsicElements
}>;

type Props = BaseProps
	& Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, keyof BaseProps>;

export const Typography: FC<Props> = ({
	as = "p",
	kind = "text1",
	weight = "regular",
	className,
	children,
	color,
	...props
}) => (
	createElement(
		as,
		{
			...props,
			"data-kind": kind,
			"data-weight": weight,
			"data-color": color,
			className: clsx(styles.typography, className)
		},
		children
	)
);