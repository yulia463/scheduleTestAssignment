import React from "react";
import { useFormContext, useController } from "react-hook-form";
import styles from "./styles.module.scss";
import { Typography } from "../../../../shared/ui";

export const CalendarCounter = () => {
	const { control } = useFormContext();
	const { field } = useController({
		name: "totalHours",
		control,
		defaultValue: 4,
	});

	const handleIncrement = () => {
		field.onChange(field.value + 1);
	};

	const handleDecrement = () => {
		field.onChange(field.value > 1 ? field.value - 1 : field.value);
	};

	return (
		<div className={styles.main}>
			<button type="button" onClick={handleDecrement} className={styles.decrementButton}>
        -
			</button>
			<Typography className={styles.value}>{field.value}</Typography>
			<Typography className={styles.label}>Всего <br/> часов</Typography>
			<button type="button" onClick={handleIncrement} className={styles.incrementButton}>
        +
			</button>
		</div>
	);
};
