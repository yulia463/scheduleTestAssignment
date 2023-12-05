import React, { useState } from "react";
import styles from "./styles.module.scss";

type AccordionProps = {
  title: string;
  headerIcon?: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		!props.disabled && setIsOpen(!isOpen);
	};

	return (
		<div className={styles.accordion}>
			<div className={styles.accordionHeader} onClick={toggleAccordion}>
				<div className={styles.accordionTitle}>
					{props.title}
					{props.headerIcon}
				</div>
				<div className={styles.accordionIcon}>{isOpen ? "-" : "+"}</div>
			</div>
			{isOpen && <div className={styles.accordionContent}>{props.children}</div>}
		</div>
	);
};

