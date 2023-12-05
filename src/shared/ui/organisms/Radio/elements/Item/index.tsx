import { useContext } from "react";
import { RadioButton } from "../Button";
import { RadioContext, RadioValue } from "../context";
import { ItemProps } from "../types";

import styles from "./styles.module.scss";

export const RadioItem = <T extends RadioValue>({ children, value, onClick }: ItemProps<T>) => {
	const ctx = useContext(RadioContext);
	const isActive = Array.isArray(ctx.value) ? ctx.value.some(item => item === value) : ctx.value === value;

	const nodeProps = {
		onClick: () => {
			if (ctx.disabled) return;

			ctx?.onChange?.(value);
			onClick?.();
		},
		"data-active": isActive,
		children,
		disabled: ctx.disabled
	};

	return (
		ctx.mode === "buttons" ? <RadioButton {...nodeProps} /> : <li {...nodeProps} className={styles.itemClassic} />
	);
};

