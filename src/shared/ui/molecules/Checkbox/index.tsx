import { forwardRef, PropsWithChildren } from "react";
import { Icon } from "../../atoms";

import styles from "./styles.module.scss";

type Props = PropsWithChildren<{
	value?: boolean,
	onChange: (value: boolean) => void,
	disabled?: boolean
}>

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ value, onChange, children, ...rest }, ref) => (
	<label className={styles.root} data-checked={value}>
		<div className={styles.checkbox}>
			<Icon name="Checked" />
		</div>
		<input
			className={styles.hiddenInput}
			checked={value}
			onChange={() => onChange(!value)}
			type="checkbox"
			ref={ref}
			{...rest}
		/>

		{children}
	</label>
));

Checkbox.displayName = "Checkbox";