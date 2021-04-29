import React from "react";
import ReactModal from "react-modal";
import s from "../scss/Modal.module.scss";

let ModalDeleteButton = (props) => {
  let deleteHandler = () => {
    let deleteId = props.deleteId;
    props.deleteProd(deleteId);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <span className={s.portfolio__buttonDel} onClick={openModal}>
        Видалити
      </span>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Ви дійсно бажаєте видалити товар?</h2>
        <div className={s.portfolio__body}>
          {" "}
          <span className={s.portfolio__buttonDel} onClick={deleteHandler}>
            Так
          </span>
          <span className={s.portfolio__buttonDel} onClick={closeModal}>
            Ні
          </span>
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalDeleteButton;
