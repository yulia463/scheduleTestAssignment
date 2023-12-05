import React, { PropsWithChildren, cloneElement, ReactElement, useEffect } from "react";
import { FieldValues, FormProvider, UseFormReturn, UseControllerProps, useFormContext, Controller } from "react-hook-form";

import styles from "./styles.module.scss";
import { clsx } from "clsx";
import { Typography } from "../../atoms";

type RootProps<T extends FieldValues> = PropsWithChildren<{
	form: UseFormReturn<T, object>;
	onSubmit?: (value: T) => void;
	className?: string;
	resetOnDestroy?: boolean
}>;

function Root<T extends FieldValues>({ form, onSubmit, className, children, resetOnDestroy = true }: RootProps<T>) {

	useEffect(() => {
		return () => {
			if (resetOnDestroy) form.reset();
		};
	}, []);
	return (
		<FormProvider {...form}>
			<form className={clsx(styles.form, className)} onSubmit={onSubmit && form.handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
}

type ItemProps<T, V> = Pick<UseControllerProps, "defaultValue" | "shouldUnregister"> & {
	children: ReactElement;
	name: T;
	label?: string
	className?: string;
	required?: boolean,
	onChange?: (value: V) => void
};

const Item = <T extends string, V>({
	shouldUnregister,
	name,
	defaultValue,
	children,
	label,
	className,
	required = true,
	onChange
}: ItemProps<T, V>) => {
	const form = useFormContext();

	return (
		<Controller
			control={form.control}
			shouldUnregister={shouldUnregister}
			defaultValue={defaultValue}
			name={name}
			render={({ field, fieldState }) => (
				<label className={clsx(styles.field, className)}>
					{label && (
						<div className={styles.label}>
							<Typography
								as="span"
								kind="text1"
								className={clsx(styles.labelText)}
							>
								{label}
							</Typography>

							{!required && (
								<Typography
									as="span"
									kind="text1"
									color="ghost"
								>
									Not required
								</Typography>
							)}
						</div>
					)}

					<>
						{cloneElement(children, {
							value: field.value,
							onBlur: field.onBlur,
							onChange: (e: V) => {
								field.onChange(e as React.ChangeEvent<Element>);
								onChange?.(e);
							},
							error: fieldState.error?.message,
							ref: field.ref,
						})}
					</>
					{fieldState.error?.message && (
						<Typography
							data-visible={Boolean(fieldState.error?.message)}
							as="span"
							kind="text2"
							weight="medium"
							className={styles.error}
						>
							{fieldState.error?.message}
						</Typography>
					)}
				</label>
			)}
		/>
	);
};

export const Form = Object.assign(Root, {
	Item
});
