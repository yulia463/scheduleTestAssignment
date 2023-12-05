import { addDays } from "date-fns";

export const calculateNewCourseEndDate = (totalHours: number, hoursPerDay: number, initialDate: Date, selectedDaysOfWeek: number[]) => {
	let remainingHours = totalHours;
	let currentDate = initialDate;

	for (let currentHour = 0; remainingHours > 0 && remainingHours >= hoursPerDay; currentHour++) {
		currentDate = addDays(currentDate, 1);

		if (selectedDaysOfWeek.includes(currentDate.getDay())) {
			remainingHours -= hoursPerDay;
		}
	}

	return currentDate;
};
