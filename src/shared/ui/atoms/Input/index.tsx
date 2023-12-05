import clsx from "clsx";
import { ChangeEventHandler, createElement, forwardRef } from "react";

import styles from "./styles.module.scss";

type BaseProps = {
	value?: string,
	onChange?: (value: string) => void,
	appendBefore?: JSX.Element,
	appendAfter?: JSX.Element,
	as?: "input" | "textarea",
	ref?: React.ForwardedRef<HTMLInputElement>,
	error?: string
}

export type InputProps =
	BaseProps &
	Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof BaseProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
	value,
	className,
	onChange,
	readOnly,
	appendAfter,
	appendBefore,
	as = "input",
	error,
	...inputProps
}, ref) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		onChange?.(e.currentTarget.value);
	};

	return (
		<label
			data-readonly={readOnly}
			className={clsx(styles.root, className, { [styles.error]: Boolean(error) })}
			data-has-value={Boolean(value)}
		>
			{appendBefore && (
				<span className={styles.appendBefore}>
					{appendBefore}
				</span>
			)}

			{createElement(
				as,
				{
					className: styles.input,
					onChange: handleChange,
					ref,
					value,
					readOnly,
					...inputProps
				}
			)}

			{appendAfter && (
				<span className={styles.appendAfter}>
					{appendAfter}
				</span>
			)}
		</label>
	);
});

Input.displayName = "Input";
