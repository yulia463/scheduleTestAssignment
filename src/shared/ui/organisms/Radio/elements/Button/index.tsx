import { FC } from "react";
import { Button, ButtonProps } from "../../../../molecules";

import styles from "./styles.module.scss";

type Props = Pick<ButtonProps, "onClick" | "appendBefore">

export const RadioButton: FC<Props> = (props) => (
	<Button type="button" size="s" className={styles.radioButton} kind="secondary" {...props} />
);