import React from "react";
import { useFormContext, useController } from "react-hook-form";
import styles from "./styles.module.scss";
import { Typography } from "../../../../shared/ui";

export const CounterStudyHours = () => {
	const { control, watch} = useFormContext();
	const { field } = useController({
		name: "hoursPerDay",
		control,
		defaultValue: 2.5,
	});

	const totalHours = watch("totalHours");
	const fieldValue = field.value;

	const handleDecrement = () => {
		field.onChange(fieldValue > 1 ? fieldValue - 0.5 : fieldValue);
	};

	const handleIncrement = () => {
		const valueToSet = (fieldValue < totalHours && fieldValue < 12) ? fieldValue + 0.5 : fieldValue;
		field.onChange(valueToSet);
	};

	return (
		<div className={styles.main}>
			<button type="button" onClick={handleDecrement} className={styles.decrementButton}>
        -
			</button>
			<Typography className={styles.value}>{field.value}</Typography>
			<Typography className={styles.label}>
				<Typography as='span' className={styles.word}>Часов </Typography>
				<Typography as='span' className={styles.word}>в день</Typography>
			</Typography>
			<button type="button" onClick={handleIncrement} className={styles.incrementButton}>
        +
			</button>
		</div>
	);
};
