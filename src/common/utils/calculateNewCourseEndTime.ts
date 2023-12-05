import { addMinutes } from "date-fns";
export const calculateNewCourseEndTime = (
	hoursPerDay: number,
	startTime: Date,
	hoursType: number,
	pauseDuration: number
): Date => {
	const endTime = addMinutes(startTime, (hoursType + pauseDuration) * hoursPerDay);
	return endTime;
};
