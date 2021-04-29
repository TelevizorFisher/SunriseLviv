import React from "react";
import { openModalActionCreator } from "../redux/modal-reduser";
import "../scss/Order.scss";

const myStyles = {
  display: "none",
};

export default function Order() {
  return (
    <>
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
              E-mail
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
            Отправить
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
    </>
  );
}
