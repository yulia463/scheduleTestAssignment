import React, { useState } from "react";
import "./application/styles/index.scss";
import styles from "./app.module.scss";
import { Button } from "./shared/ui";
import { Modal } from "./shared/ui/organisms/Modal";
import { ScheduleForm } from "./components/ScheduleForm";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.app}>
			<Button onClick={() => setIsModalOpen(true)}>Открыть форму</Button>
			<Modal
				title={"Редактировать расписания"}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				className={styles.modal}
				renderFooter={null}
			>

				<Modal.Body>
					<ScheduleForm onModalClose={() => setIsModalOpen(false)}/>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default App;
