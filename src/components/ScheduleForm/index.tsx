import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, Select, Typography } from "../../shared/ui";
import styles from "./styles.module.scss";
import { audiences, hours, pause, teachers } from "../../common/mocks";
import { HoursCounter } from "./form-items/CalendarCounter";
import { CalendarCounter } from "./form-items/TotalHoursCounter";
import { CounterStudyHours } from "./form-items/HoursPerDayCounter";
import { TimeCounter } from "./form-items/TimeCounter";
import { Hour, Pause, ScheduleFormType } from "../../common/types";
import { WeekDaysPicker } from "./form-items/WeekDaysPicker/WeekDaysPicker";


type ScheduleFormProps = {
  onModalClose: () => void;
}


export const ScheduleForm: React.FC<ScheduleFormProps> = (props) => {

	const form = useForm<ScheduleFormType>({
		defaultValues: {
			title: "",
			color: "#000000",
			hourType: Hour.ACADEMIC,
			pauseDurationMin: Pause.PAUSE_0,
			hoursPerDay: 2.5,
		},
	});

	const handleSubmitForm = (data: ScheduleFormType) => {
		console.log("data>>>>", data);
	};

	return (
		<Form form={form} onSubmit={handleSubmitForm} className={styles.form}>
			<div className={styles.upperBlock}>
				<Form.Item name="title" label="" className={styles.inputTitle}>
					<Input placeholder="Онлайн-школа"/>
				</Form.Item>
				<div className={styles.colorBlock}>
					<Typography color="secondary">Цвет группы:</Typography>
					<Form.Item name="color">
						<input
							className={styles.inputColor}
							type="color"
							name="groupColor"
							aria-label="выберите цвет группы"
						/>
					</Form.Item>
				</div>
			</div>


			<div className={styles.hoursBlock}>
				<Form.Item name="hourType" className={styles.hoursTypeInput}>
					<Select>
						{hours.map((hour) => (
							<Select.Option value={hour.value} key={hour.value}>
								{hour.title}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
				<CalendarCounter/>
				<HoursCounter/>
			</div>

			<Form.Item name={"weekdays"}>
				<WeekDaysPicker/>
			</Form.Item>

			<div className={styles.hoursBlock}>
				<Form.Item name="pauseDurationMin" className={styles.pauseTypeSelect}>
					<Select placeholder={"Без перерыва"}>
						{pause.map((pause) => (
							<Select.Option value={pause.value} key={pause.value}>
								{pause.title}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
				<CounterStudyHours/>
				<TimeCounter/>
			</div>

			<div className={styles.lastBlock}>
				<Form.Item name="teacherId">
					<Select placeholder={"Выберите преподавателя на это время"}>
						{teachers.map((teacher) => (
							<Select.Option value={teacher.id} key={teacher.id}>
								{teacher.fullName}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item name="audienceId">
					<Select placeholder={"Аудитория"}>
						{audiences.map((audience) => (
							<Select.Option value={audience.id} key={audience.id}>
								{audience.title}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
			</div>


			<div className={styles.infoDiv}>
				<Typography as="div">
          Выбор <Typography as="span" weight="bold">преподавателя</Typography> и
					<Typography as="span" weight="bold"> аудитории</Typography> не обязателен
				</Typography>
			</div>

			<div className={styles.buttons}>
				<Button.Group>
					<Button kind={"text"} onClick={props.onModalClose}>Отмена</Button>
					<Button kind={"secondary"} type={"submit"}>Добавить расписание</Button>
				</Button.Group>
			</div>
		</Form>
	);
};
