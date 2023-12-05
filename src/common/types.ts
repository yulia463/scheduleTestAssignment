export type ScheduleFormType = {
  title: string;
  color: string;

  teacherId: number;
  audienceId: number;
  hourType: Hour;
  pauseDurationMin: Pause;
  hoursPerDay: number;
  timeFrom: Date;
  timeTo: Date;
  startDate: Date;
  endDate: Date;
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
  PAUSE_5_MIN = 5,
  PAUSE_10_MIN = 10,
  PAUSE_15_MIN = 15,
  PAUSE_20_MIN = 20,
  PAUSE_25_MIN = 25,
  PAUSE_30_MIN = 30,
}
