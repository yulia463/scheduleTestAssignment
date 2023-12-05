export type ScheduleFormType = {
  title: string;
  color: string;

  teacherId: number;
  audienceId: number;
  hourType: Hour;
  pauseDurationMin: Pause;
};

export enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export enum Hour {
  ACADEMIC = 45,
  ASTRONOMICAL = 60,
}

export enum Pause {
  PAUSE_0 = 0,
  PAUSE_10_MIN = 10,
  PAUSE_15_MIN = 15,
}
