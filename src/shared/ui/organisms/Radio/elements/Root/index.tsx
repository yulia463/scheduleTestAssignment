import { RootProps } from "../types";

import { forwardRef } from "react";
import { RadioContext, RadioValue } from "../context";
import clsx from "clsx";

import styles from "./styles.module.scss";

export const RadioRoot = forwardRef<HTMLLabelElement, RootProps<any>>(({
	value,
	disabled = false,
	mode = "classic",
	multiple,
	className,
	onChange,
	children
}, ref) => {
	const handleChange = (newValue: unknown) => {
		if (!multiple) return onChange?.(newValue);

		const currentValues = Array.isArray(value) ? value : [];

		const alreadyChecked = currentValues.some(row => row === newValue);
		const updatedValues = alreadyChecked ? currentValues.filter(row => row !== newValue) : [...currentValues, newValue];

		return onChange?.(updatedValues as RadioValue);
	};

	return (
		<label ref={ref} className={clsx(styles.root, className)} data-mode={mode}>
			<RadioContext.Provider value={{ value: value as RadioValue, mode, disabled, onChange: handleChange }}>
				{children}
			</RadioContext.Provider>
		</label>
	);
});

RadioRoot.displayName = "Radio";
