import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPrice,
  addQty,
  totalPrice,
  toggleModal,
  itemCase,
  finalCase,
} from "../../redux/caseStore";
import { Input, Space } from "antd";
const { Search } = Input;

const ModalAddCoin = () => {
  const dispatch = useDispatch();
  const stateModal = useSelector((store) => store.caseStore.stateModal);
  const price = useSelector((store) => store.caseStore.price);

  const countObject = useSelector((store) => store.caseStore.objectCount);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(toggleModal(stateModal));
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(toggleModal(stateModal));
  };
  const onSearch = (value) => {
    dispatch(totalPrice(parseInt(price) * value));
    dispatch(addQty(value));
    dispatch(finalCase({ ...countObject, quontity: value }));

    dispatch(toggleModal(stateModal));
  };
  return (
    <>
      <Modal
        title="Добавить в портфель"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Купить </h3>
        <p>
          <Search
            placeholder="Сколько желаете приобрести?"
            allowClear
            enterButton="Купить"
            size="large"
            onSearch={onSearch}
          />
        </p>
      </Modal>
    </>
  );
};
export default ModalAddCoin;
