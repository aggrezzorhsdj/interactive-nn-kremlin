import {Button, Modal} from "antd";
import React, {memo} from "react";
import {useAppStore} from "../Store";
import {DEFAULT_CAMERA_PARAMS} from "../models/models";

const Info = () => {
	const {setSelectedBuilding, selectedBuilding, setCameraParameters} = useAppStore();
	const handleClose = () => {
		setSelectedBuilding(null);
		setCameraParameters(DEFAULT_CAMERA_PARAMS)
	};

	return (
		<Modal
			title={selectedBuilding?.title || selectedBuilding?.name}
			open={!!selectedBuilding}
			onClose={handleClose}
			onOk={handleClose}
			onCancel={handleClose}
			width={500}
			footer={<Button onClick={handleClose}>Закрыть</Button>}
		>
			<div className="modal__body">
				{selectedBuilding?.image && <div className="modal__image"><img src={selectedBuilding.image} alt={selectedBuilding.name}/></div>}
				{selectedBuilding?.text && <div className="modal__text">{selectedBuilding.text}</div>}
			</div>
		</Modal>
	)
}

export default memo(Info);
