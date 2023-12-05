import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

export const Portal: FC<{ children: ReactNode }> = ({ children }) => {
	const shouldRender = typeof window !== "undefined";
	const container = shouldRender ? document.getElementById("portal") : null;

	if (!shouldRender) {
		return null;
	}

	return container ? createPortal(children, container) : null;
};