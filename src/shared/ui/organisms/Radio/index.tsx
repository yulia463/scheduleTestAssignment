import { RadioRoot } from "./elements/Root";
import { RadioItem } from "./elements/Item";
import { RadioButton } from "./elements/Button";

export const Radio = Object.assign(RadioRoot, {
	Item: RadioItem,
	Button: RadioButton
});