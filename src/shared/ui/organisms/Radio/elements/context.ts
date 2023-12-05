import { createContext } from "react";

export type RadioValue = number | string | null | [];
export type RadioMode = "buttons" | "classic"

type ContentValue = { 
  value?: RadioValue | RadioValue[], 
  onChange?: (value: any) => void,
	mode: RadioMode,
	disabled?: boolean
};

export const RadioContext = createContext<ContentValue>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	mode: "classic"
});