import React, { useEffect } from "react";
import { useFormContext, useController } from "react-hook-form";
import styles from "./styles.module.scss";
import { Typography } from "../../../../shared/ui";
import { format, setHours, setMinutes } from "date-fns";
import { calculateNewCourseEndTime } from "../../../../common/utils/calculateNewCourseEndTime";

export const TimeCounter = () => {
	const { control, watch } = useFormContext();
	const { field: timeFromField } = useController({
		name: "timeFrom",
		control,
		defaultValue: setMinutes(setHours(new Date(), 7), 0),
	});

	const { field: timeToField } = useController({
		name: "timeTo",
		control,
		defaultValue: setMinutes(setHours(new Date(), 7), 0),
	});

	const hourType = watch("hourType");
	const pauseDurationMin = watch("pauseDurationMin");
	const hoursPerDay = watch("hoursPerDay");

	useEffect(() => {
		console.log(hoursPerDay, timeFromField.value , hourType, pauseDurationMin);
		timeToField.onChange(calculateNewCourseEndTime(
			hoursPerDay,
			timeFromField.value, hourType, pauseDurationMin));
	}, [hoursPerDay, timeFromField.value, hourType, pauseDurationMin]);

	console.log("here>>", format(timeFromField.value, "HH:mm"));
	return (
		<div className={styles.main}>
			<Typography as="span" className={styles.timeTo}>{format(timeFromField.value, "HH:mm")}</Typography>
			<Typography className={styles.label}>до</Typography>
			<Typography as="span" className={styles.timeTo}>{format(timeToField.value, "HH:mm")}</Typography>
		</div>
	);
};

