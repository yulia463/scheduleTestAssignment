import clsx from "clsx";
import { Children, FunctionComponent, isValidElement, PropsWithChildren } from "react";

import { Button } from "../../molecules";

import styles from "./styles.module.scss";

type ItemProps<T> = {
	value: T;
	title: string;
	children?: JSX.Element;
	amountBadge?: { value: number; color: "primary" | "secondary" }
	color?: "gray";
	className?: string;
	customDataActive?: boolean
};

const Item: FunctionComponent<ItemProps<any>> = () => null;

type TabProps<T> = PropsWithChildren<{
	value?: T;
	onChange?: (value: T) => void;
	forceRender?: boolean;
	appendAfter?: JSX.Element;
	appendBefore?: JSX.Element;
	bodyClassName?: string;
	headerClassName?: string;
	rootClassName?: string;
	disabled?: boolean;
	activeValues?: T | Array<T>;
}>;

const Root = <T extends string | number | null>(
	{
		value,
		onChange,
		forceRender,
		children,
		appendAfter,
		appendBefore,
		bodyClassName,
		headerClassName,
		rootClassName,
		disabled,
		activeValues,
	}: TabProps<T>) => {
	const childrenArray = Children.toArray(children);

	const childProps = childrenArray.map((child) => {
		if (!isValidElement(child) || child.type !== Item) return null;

		return child.props as ItemProps<T>;
	});

	return (
		<div className={clsx(styles.root, rootClassName)}>
			<div className={clsx(styles.header, headerClassName)}>
				{childProps.map(
					(item, index) =>
						item && (
							<Button
								disabled={disabled}
								type="button"
								key={item.value}
								size="s"
								kind="secondary"
								data-active={
									childProps[index]?.customDataActive ||
									(Array.isArray(activeValues)
										? activeValues.includes(item.value)
										: activeValues === item.value)
								}
								className={clsx(styles.tabItem, item?.color, {
									active: childProps[index]?.customDataActive || (Array.isArray(activeValues)
										? activeValues.includes(item.value)
										: activeValues === item.value),
								})}
								onClick={() => onChange?.(item.value as T)}
								appendAfter={appendAfter}
								appendBefore={appendBefore}
							>
								{item.title}
							</Button>
						),
				)}
			</div>

			<div className={clsx(styles.body, bodyClassName)}>
				{childProps.map(
					(child) =>
						child &&
						(Array.isArray(activeValues)
							? activeValues.includes(child.value) || forceRender
							: activeValues === child.value || forceRender) && (
							<div
								key={child.value}
								className={clsx(styles.content, child.className)}
								data-hidden={
									Array.isArray(activeValues)
										? !activeValues.includes(child.value) && !forceRender
										: activeValues !== child.value && !forceRender
								}
							>
								{child?.children}
							</div>
						),
				)}
			</div>
		</div>
	);
};

export const Tabs = Object.assign(Root, {
	Item,
});
