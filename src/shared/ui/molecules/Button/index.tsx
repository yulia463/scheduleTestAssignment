import React, { FC, forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

type Sizes = "s" | "m" | "l";
export type BaseButtonProps = {
	kind?: "primary" | "secondary" | "tertiary" | "text" | "ghost",
	alignment?: "left" | "center"
	size?: Sizes
	appendAfter?: JSX.Element,
	appendBefore?: JSX.Element
	wide?: boolean,
	onClick?: () => void,
	type?: "submit" | "button",
	loading?: boolean
}

export type ButtonProps = BaseButtonProps & (
	Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof BaseButtonProps>
);

const ButtonElement = forwardRef<HTMLButtonElement | null, ButtonProps>(({
	className,
	kind = "primary",
	size = "m",
	alignment = "center",
	type = "button",
	appendBefore,
	appendAfter,
	children,
	wide,
	loading = false,
	...defaultProps
}, ref) => {

	return (
		<button
			ref={ref}
			className={clsx(styles.button, className, size)}
			data-size={size}
			data-kind={kind}
			data-wide={wide}
			data-alignment={alignment}
			data-loading={loading}
			disabled={defaultProps.disabled || loading}
			type={type}
			{...defaultProps}
		>
			{appendBefore && (
				<span className={styles.appendBefore}>
					{appendBefore}
				</span>
			)}

			<div className={styles.content}>
				{children}
			</div>

			{appendAfter && (
				<span className={styles.appendAfter}>
					{appendAfter}
				</span>
			)}
		</button>
	);
});

ButtonElement.displayName = "Button";

const ButtonGroup: FC<{ children: React.ReactNode[] | React.ReactNode }> = ({ children }) => (
	<div className={styles.buttonGroup}>
		{children}
	</div>
);

export const Button = Object.assign(ButtonElement, {
	Group: ButtonGroup
});
