import React, { useState } from "react";

import { Button, Modal } from 'antd';

const Card = (props) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <div>
            <div className="Card" onClick={showModal}>
                <img src={props.img} alt="" />
                <h3 className="title--table">{props.title}</h3>
                {props.content}
            </div>
            <Modal footer={[]} title={props.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src={props.img} alt="" />
                <p className="modal--text">{props.content}</p>
            </Modal>
        </div>
    );
}

export default Card;