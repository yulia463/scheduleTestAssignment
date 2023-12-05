import { Checkbox } from "../../molecules";

import styles from "./styles.module.scss";

type Props<T> = {
	value?: string | T[],
	onChange?: (value: T[]) => void,
	items: Array<{ text: string, value: T }>,
	appendBefore?: { text: string, value: T }
}

export const CheckboxesList = <T,>({ value, onChange, appendBefore, items }: Props<T>) => {
	const handleChange = (checked: boolean, updatedValue: T) => {
		if (!onChange) return;

		if (!Array.isArray(value)) return onChange([updatedValue]);

		const updatedValues = checked
			? [...value, updatedValue]
			: value.filter(item => item !== updatedValue);

		onChange(updatedValues);
	};

	return (
		<div className={styles.list}>
			{appendBefore && (
				<label className={styles.item} data-active={appendBefore.value === value}>
					<Checkbox
						value={appendBefore.value === value}
						onChange={(checked) => handleChange(checked, appendBefore.value)}
					>
						{appendBefore.text}
					</Checkbox>

				</label>
			)}

			{items.map(row => {
				const checked = Array.isArray(value) ? value.includes(row.value) : row.value === value;

				return (
					<label className={styles.item} key={String(row.value)} data-active={checked}>
						<Checkbox
							value={checked}
							onChange={(checked) => handleChange(checked, row.value)}
						>
							{row.text}
						</Checkbox>

					</label>
				);
			})}
		</div>
	);
};