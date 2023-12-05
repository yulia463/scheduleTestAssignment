import { PropsWithChildren } from "react";
import { RadioMode, RadioValue } from "./context";

export type ItemProps<T extends RadioValue> = PropsWithChildren<{
  value: T,
  onClick?: () => void
}>

export type RootProps<T extends RadioValue> = PropsWithChildren<{
  value?: T,
  onChange?: (value: T) => void,
  mode?: RadioMode,
  multiple?: boolean,
  className?: string,
  disabled?: boolean
}>
