import { PropsWithChildren } from "react";

export type SelectValue = null | number | string

export type OptionProps = PropsWithChildren<{
	value: SelectValue,
	_onClick?: () => void,
	_active?: boolean
}>


export type ActiveOption = {
	text: string,
	value: SelectValue
}