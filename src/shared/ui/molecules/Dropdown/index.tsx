import clsx from "clsx";
import { FC, forwardRef, PropsWithChildren } from "react";

import { Button, ButtonProps } from "../index";
import styles from "./styles.module.scss";

type RootProps = PropsWithChildren<{
	className?: string
}>

const Root: FC<RootProps> = forwardRef<HTMLDivElement, RootProps>(({ children, className }, ref) => (
	<div ref={ref} className={clsx(styles.root, className)}>
		{children}
	</div >
));

Root.displayName = "Dropdown";

type ItemProps = Pick<ButtonProps, "children" | "appendAfter" | "appendBefore" | "onClick" | "disabled" | "className" | "loading">

const Item: FC<ItemProps> = (props) => (
	<Button {...props} alignment="left" kind="text" className={clsx(styles.item, props.className)} />
);

export const Dropdown = Object.assign(Root, {
	Item
});
