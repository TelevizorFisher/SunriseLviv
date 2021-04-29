import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../img-main/logoSun.png";
import { useStore } from "../../store-zustand/store";
import "../../scss/HeaderInfo.scss";
import TFDrop from "./TF-drop";

export default function HeaderInfo() {
  const ModalChange = useStore((state) => state.ModalChange);
  const modalOpen = useStore((state) => state.modalOpen);
  function openModal() {
    ModalChange(modalOpen);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <a href="#main-slider" className="menu__link __goto-block">
                  Щодня з 9-00 до 21-00
                </a>
              </li>
              <li>
                <div className="list-icon-header">
                  <span className="list-icon__one"></span>
                  <span className="list-icon__two"></span>
                  <span className="list-icon__three"></span>
                  <span className="list-icon__foure"></span>
                </div>
              </li>
              <li>
                <TFDrop />
              </li>
              <li>
                <a href="#lots" className="_goto-block"></a>
              </li>
              <li>
                <a className="menu__link goto-block">
                  <span onClick={openModal}>Звяжіться з нами</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

const Style = {
  padding: "7px 0px 0px 0px",
  width: "140px",
  height: "85px",
};
