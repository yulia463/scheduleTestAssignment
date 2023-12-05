import { createContext } from "react";
import { ActiveOption, SelectValue } from "./types";

type ContextValue = {
  value?: SelectValue,
  changeValue?: (value: SelectValue) => void,
  setActive?: (value: ActiveOption) => void,
}

export const SelectContext = createContext<ContextValue>({});