import clsx from "clsx";
import { FC } from "react";
import { Dropdown } from "../../../../molecules";
import { OptionProps } from "../../types";

import styles from "./styles.module.scss";

export const Option: FC<OptionProps> = ({ children, _onClick }) => {
	return (
		<Dropdown.Item className={clsx(styles.option)} onClick={_onClick}>
			{children}
		</Dropdown.Item>
	);
};