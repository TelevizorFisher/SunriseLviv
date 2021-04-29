import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import "../../scss/Phone.scss";
import { useStore } from "../../store-zustand/store";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "101",
  },
};

const myStyles = {
  display: "none",
};
const myStylesCLose = {
  position: "absolute",
  top: "0px",
  right: "5px",
  fontSize: "20px",
  cursor: "pointer",
  fontWeight: "500",
};

export default function Phone() {
  const ModalChange = useStore((state) => state.ModalChange);
  const modalOpen = useStore((state) => state.modalOpen);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  /*   if (Modal == true) {
    openModal();
  } */
  function openModal() {
    setIsOpen(true);
  }

  if (modalOpen) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  var subtitle;

  return (
    <div className="phone__body">
      <Tooltip
        position="top"
        trigger="mouseenter"
        arrow="true"
        arrowSize="big"
        size="big"
        distance="20"
        theme="transparent"
        duration="1000"
        html={
          <div className="phone__informations">
            Натисніть, щоб ми вам зателефонували!
          </div>
        }
      >
        <span onClick={openModal} className="phone__text">
          Звяжіться з нами
        </span>
      </Tooltip>

      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="form-sckroll">
          <div className="form">
            <form
              name="myForm"
              className="form__body"
              method="post"
              target="hidden_iframe"
              action="https://docs.google.com/forms/d/e/1FAIpQLScc4Zv4gWK_-z3F2LfEX9ZFdyUT_svCoidQgogc3LfvSF_jmg/formResponse"
            >
              <h1 className="form__title">Онлайн заявка</h1>
              <div className="form__item">
                <label htmlFor="formName" className="form__label">
                  Ім'я*
                </label>
                <input
                  name="entry.145511777"
                  type="text"
                  placeholder="Іванов Іван"
                  className="form__input"
                />
              </div>
              <div className="form__item">
                <label htmlFor="formNumber" className="form__label">
                  Номер телефону*
                </label>
                <input
                  name="entry.1926858627"
                  type="text"
                  placeholder="+380..."
                  className="form__input"
                />
              </div>
              <div className="form__item">
                <label htmlFor="formEmail" className="form__label">
                  E-mail*
                </label>
                <input
                  name="entry.83673229"
                  type="email"
                  placeholder="ivanov@gmail.com"
                  className="form__input"
                />
              </div>
              <div className="form__item">
                <label htmlFor="formMessage" className="form__label">
                  Коментар
                </label>
                <textarea
                  name="entry.1975332216"
                  id="formMessage"
                  className="form__input"
                  placeholder="Мабуть, тут має бути, те що саме ви хочете замовити..."
                ></textarea>
              </div>
              {/*           <div className="form__item">
            <div className="form__label">Прикрепить фото</div>
            <div className="file">
              <div className="file__item">
                <input
                  id="formImage"
                  accept=".jpg, .png, .gif"
                  type="file"
                  name="image"
                  className="file__input"
                />
                <div className="file__button">Выбрать</div>
              </div>
              <div className="file__preview"></div>
            </div>
          </div> */}
              {/*           <div className="form__item">
            <div className="checkbox">
              <input
                id="formAgreement"
                type="checkbox"
                name="agreement"
                className="checkbox__input"
              />
              <label htmlFor="formAgreement">
                <span>Я даю согласие</span>
              </label>
            </div>
          </div> */}
              <button type="submit" value="Send" className="form__button">
                Відправити
              </button>
            </form>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScc4Zv4gWK_-z3F2LfEX9ZFdyUT_svCoidQgogc3LfvSF_jmg/viewform?embedded=true"
            name="hidden_iframe"
            id="hidden_iframe"
            style={myStyles}
          >
            Завантаження…
          </iframe>
        </div>
        <div style={myStylesCLose}>
          <span onClick={closeModal}>x</span>
        </div>
      </ReactModal>
    </div>
  );
}
