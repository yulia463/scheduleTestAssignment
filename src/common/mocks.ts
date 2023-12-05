import { Hour, Pause, WeekDays } from "./types";

export const teachers: Array<{ fullName: string; id: number }> = [
	{ fullName: "Иванов И. И.", id: 1 },
	{ fullName: "Сидоров С. С.", id: 2 },
	{ fullName: "Петрова П. П..", id: 3 },
];

export const audiences: Array<{ title: string, id: number }> = [
	{ title: "Аудитория 1", id: 1 },
	{ title: "Аудитория 2.", id: 2 },
	{ title: "Аудитория 3", id: 3 },
];

export const weekDays: Array<{ title: string, value: WeekDays | Array<WeekDays> }> = [
	{ title: "ПН", value: WeekDays.MONDAY },
	{ title: "ВТ", value: WeekDays.TUESDAY },
	{ title: "СР", value: WeekDays.WEDNESDAY },
	{ title: "ЧТ", value: WeekDays.THURSDAY },
	{ title: "ПТ", value: WeekDays.FRIDAY },
	{ title: "СБ", value: WeekDays.SATURDAY },
	{ title: "ВС", value: WeekDays.SUNDAY },
];


export const hours: Array<{ title: string, value: Hour }> = [
	{ title: "Академические", value: Hour.ACADEMIC },
	{ title: "Астрономические", value: Hour.ASTRONOMICAL },
];

export const pause: Array<{ title: string, value: Pause }> = [
	{ title: "Без перерыва", value: Pause.PAUSE_0 },
	{ title: "С перерывом 5 минут", value: Pause.PAUSE_5_MIN },
	{ title: "С перерывом 10 минут", value: Pause.PAUSE_10_MIN },
	{ title: "С перерывом 15 минут", value: Pause.PAUSE_15_MIN },
	{ title: "С перерывом 20 минут", value: Pause.PAUSE_20_MIN },
	{ title: "С перерывом 25 минут", value: Pause.PAUSE_25_MIN },
	{ title: "С перерывом 30 минут", value: Pause.PAUSE_30_MIN },
];


