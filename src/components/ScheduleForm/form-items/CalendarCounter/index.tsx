import React, { ChangeEvent, useEffect } from "react";
import { useFormContext, useController } from "react-hook-form";
import styles from "./styles.module.scss";
import { Typography } from "../../../../shared/ui";
import { calculateNewCourseEndDate } from "../../../../common/utils/calculateNewCourseEndDate";

export const HoursCounter = () => {
	const { control, watch } = useFormContext();
	const { field: startDateField } = useController({
		name: "startDate",
		control,
		defaultValue: new Date().toISOString().split("T")[0],
	});

	const { field: endDateField } = useController({
		name: "endDate",
		control,
		defaultValue: new Date().toString(),
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
		startDateField.onChange(e.currentTarget.value);
	};

	const weekdays = watch("weekDays");
	const totalHours = watch("totalHours");
	const hoursPerDay = watch("hoursPerDay");

	useEffect(() => {
		endDateField.onChange(calculateNewCourseEndDate(totalHours, hoursPerDay, new Date(startDateField.value), weekdays)?.toLocaleDateString("ru-RU"));

	}, [totalHours, hoursPerDay, startDateField.value, weekdays]);

	return (
		<div className={styles.main}>
			<input
				value={startDateField.value}
				onChange={(value) => handleChange(value)}
				type="date"
				className={styles.calendarInputStart}
				onKeyDown={(e) => e.preventDefault()}
				min={new Date().toISOString().split("T")[0]}
			/>
			<Typography className={styles.label}>до</Typography>
			<Typography
				className={styles.calendarInputEnd}
			>
				{endDateField.value}
			</Typography>
		</div>
	);
};
