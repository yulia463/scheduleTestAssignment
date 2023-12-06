import React, { FC, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Tabs } from "../../../../shared/ui/organisms/Tabs";
import { weekDays } from "../../../../common/mocks";
import { WeekDays } from "../../../../common/types";

export const WeekDaysPicker: FC = () => {

	const { control } = useFormContext();
	const { field } = useController({
		name: "weekDays",
		control,
		defaultValue: [1, 3, 5],
	});

	const handleChange = (value: WeekDays | Array<WeekDays>) => {
		if (typeof value === "number"){
			const currentValue = Array.isArray(field.value) ? field.value : [field.value];
			const newValue = currentValue.some((item) => item === value)
				? currentValue.filter((item) => item !== value)
				: [...currentValue, value];
			field.onChange(newValue);
		} else {
			field.onChange(value);
		}
	};
	// const handleChange = (value: WeekDays | Array<WeekDays>) => {
	// 	if (typeof value === "number"){
	// 		const currentValue = Array.isArray(field.value) ? field.value : [field.value];
	//
	// 		let newValue = currentValue.some((item) => item === value)
	// 			? currentValue.filter((item) => item !== value)
	// 			: [...currentValue, value];
	// 		if (!newValue.length) newValue = null;
	// 		field.onChange(newValue);
	// 	} else {
	// 		field.onChange(value);
	// 	}
	// };

	const activeValues = field.value;

	const isFirstTabActive = useMemo(() => {
		return field.value?.length === 3 && field.value?.every((item: number) => [1, 3, 5].includes(item));
	}, [field.value]);

	const isSecondTabActive = useMemo(() => {
		return field.value?.length === 2 && field.value?.every((item: number) => [2, 4].includes(item));
	}, [field.value]);

	return (
		<Tabs
			onChange={(value) => handleChange(value as WeekDays | Array<WeekDays>)}
			activeValues={activeValues}
		>
			<Tabs.Item customDataActive={isFirstTabActive} value={[1, 3, 5]} title={"ПН/СР/ПТ"} />
			<Tabs.Item customDataActive={isSecondTabActive} value={[2, 4]} title={"ВТ/ЧТ"} />
			{weekDays.map((day) => (
				<Tabs.Item value={day.value} key={day.title} title={day.title} />
			))}
		</Tabs>
	);
};

