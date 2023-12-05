import clsx from "clsx";
import { Children, isValidElement, PropsWithChildren, useRef, useState } from "react";
import { Icon, Input, InputProps, Tooltip } from "../../../../atoms";
import { Dropdown } from "../../../../molecules";
import { OptionProps } from "../../types";
import { Option } from "../Option";

import styles from "./styles.module.scss";

type Props<T> = PropsWithChildren<{
	onChange?: (value: T) => void,
	value?: T,
}> & Pick<InputProps, "placeholder" | "className">

export const Root = <T,>({ value, onChange, children, ...inputProps }: Props<T>) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const selectBoxRef = useRef<HTMLDivElement>(null);

	const handleChange = (value: T) => {
		onChange?.(value);

		setIsDropdownOpen(false);
	};

	const handleFocus = () => {
		setIsDropdownOpen(true);
	};

	const childrenProps = Children.map(children, (child) => {
		if (!isValidElement(child) || child.type !== Option) return;

		return child.props as OptionProps;
	});

	const activeChild = childrenProps?.find(child => child.value === value);

	const displayValue = value !== undefined && value !== null ? activeChild?.children?.toString() : "";

	return (
		<Tooltip placement="bottom" open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
			<Tooltip.Content >
				<Dropdown className={styles.dropdown}>
					<div style={{ width: selectBoxRef.current?.offsetWidth }}>
						{childrenProps?.map(childProps => (
							<Option
								key={childProps.value}
								_onClick={() => handleChange(childProps.value as T)}
								{...childProps}
							/>
						))}
					</div>
				</Dropdown>
			</Tooltip.Content>


			<Tooltip.Trigger asChild>
				<div ref={selectBoxRef}>
					<Input
						{...inputProps}
						value={displayValue}
						readOnly
						onFocus={handleFocus}
						appendAfter={(
							<Icon
								className={clsx(styles.arrow, { [styles.rotateArrow]: isDropdownOpen })}
								name="ArrowDown"
							/>
						)}
					/>
				</div>
			</Tooltip.Trigger>
		</Tooltip >
	);
};
