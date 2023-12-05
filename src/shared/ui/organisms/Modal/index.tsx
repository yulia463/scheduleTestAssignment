import { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./styles.module.scss";
import { Typography, Icon } from "../../atoms";
import { Button, BaseButtonProps, } from "../../molecules";

import { Portal } from "../../../libs/Portal";
import clsx from "clsx";

type ModalBodyProps = PropsWithChildren<{ className?: string }>;

export const ModalBody: FunctionComponent<ModalBodyProps> = ({ children, className }) => (
	<div className={clsx(styles.modalBody, className)}> {children}</div >
);

export const ModalFooter: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => <div className={clsx(styles.modalFooter, className)}> {children}</div >;

type Props = PropsWithChildren<{
	title?: string;
	description?: string;
	isOpen: boolean;
	onClose: () => void;
	className?: string;
	onOk?: () => void;
	cancelText?: string;
	okText?: string;
	renderFooter?: JSX.Element | null;
	customBody?: boolean;
	destroyOnClose?: boolean;
	okButtonProps?: BaseButtonProps,
	cancelButtonProps?: BaseButtonProps,
}>;

const Root: FunctionComponent<Props> = ({
	children,
	title,
	description,
	onClose,
	isOpen,
	className,
	onOk,
	cancelText = "Back",
	okText = "Submit",
	renderFooter,
	customBody,
	destroyOnClose = true,
	okButtonProps = {},
	cancelButtonProps = {}
}) => {

	useEffect(() => {
		document.body.classList[isOpen ? "add" : "remove"](styles.disableBodyScroll);
	}, [isOpen]);

	return <Portal>
		<CSSTransition
			in={isOpen}
			timeout={400}
			classNames={{
				enterActive: styles.enterActive,
				enterDone: styles.enterDone,
			}}
			unmountOnExit={destroyOnClose}
		>
			<div>
				<div role="presentation" className={styles.overlay} onClick={onClose} />
				<div className={clsx(styles.modal, className)}>
					{(
						<>
							<div className={styles.modalHeader}>
								{title && (
									<Typography weight="bold" kind="title3">
										{title}
									</Typography>
								)}
								<span role="presentation" className={styles.closeIcon} onClick={onClose}>
									<Icon name="Close" />
								</span>
							</div>
							{customBody ? children : <ModalBody>{children}</ModalBody>}
							{renderFooter !== undefined ? (
								renderFooter
							) : (
								<ModalFooter>
									<Button onClick={onClose} {...cancelButtonProps}>
										<>
											{cancelText}
										</>
									</Button>
									<Button kind="primary" onClick={onOk} {...okButtonProps}>
										{okText}
									</Button>
								</ModalFooter>
							)}
						</>
					)}
				</div>
			</div>
		</CSSTransition>
	</Portal>;
};

export const Modal = Object.assign(Root, {
	Body: ModalBody,
	Footer: ModalFooter
});
