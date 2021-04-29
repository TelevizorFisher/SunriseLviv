import React from "react";
import "../../scss/Footer.scss";

export default function Footer() {
  return (
    /*   <footer className="footer">
      <div className="container-f">
        <div className="footer__row">
          <div className="footer__left left-f">
            <div className="left-f__logo"></div>
            <div className="left-f__text">
              This is a blurb about the company sed do eiusmod tempor incididunt
              ut labore et dolore ex magna aliqua.
            </div>
            <div className="left-f__ikons"></div>
          </div>
          <div className="footer__center center-f">
            <div className="center-f__title">EXPLORE LINKS</div>
            <ul className="center-f__exp-l">
              <li>About</li>
              <li>Services</li>
              <li>Specials</li>
              <li>Estimates</li>
            </ul>
            <ul className="center-f__exp-r">
              <li>Reviews</li>
              <li>Shop</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer__right right-f">
            <div className="right-f__title">CONTACT</div>
            <ul className="right-f__contact">
              <li className="contact-1">
                321 Pikes Place Parkway Seattle, WA 54321
              </li>
              <li className="contact-2">(555) 765-4321</li>
              <li className="contact-3">Info@company.com</li>
              <li className="contact-4">Mon - Sat: 7:000 am - 6:00 pm</li>
            </ul>
          </div>
        </div>
      </div>
    </footer> */

    <footer className="footer">
      <hr />
      <div className="container-footer">
        <div className="footer__body">
          <div className="footer__logo-body">
            <div className="left-f__logo"></div>
            <div className="footer__logo-subtitle">
              Eu augue ut lectus arcu bibendum at.
            </div>
          </div>
          <div className="footer__menu-body">
            <div className="footer__menu-colum">
              <ul className="menu-colum__list">
                <li>
                  <a href="" className="menu-colum__link Menu-line">
                    <span className="list-title">Меню</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Головна</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Про нас</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Наші роботи</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Замовлення</span>
                  </a>
                </li>
              </ul>
            </div>
            {/*             <div className="footer__menu-colum">
              <ul className="menu-colum__list">
                <li>
                  <a href="" className="menu-colum__link Services-line">
                    <span className="list-title">Services</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Lorem</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Ipsum</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Dolor</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>Sit Amet</span>
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="footer__menu-colum">
              <ul className="menu-colum__list">
                <li>
                  <a href="" className="menu-colum__link Contact-line">
                    <span className="list-title">Contact us</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>SUNriseLviv@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="" className="menu-colum__link">
                    <span>+380954756441</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__menu-colum">
              <ul className="menu-colum__list">
                <li>
                  <a href="" className="menu-colum__link Follow-line">
                    <span className="list-title">Follow us</span>
                  </a>
                </li>
              </ul>
              <div className="menu-colum__list-icon">
                <span className="list-icon__one"></span>
                <span className="list-icon__two"></span>
                <span className="list-icon__three"></span>
                <span className="list-icon__foure"></span>
              </div>
            </div>
          </div>
        </div>
        <div href="" className="c-text">
          <span>© 2021 SunriseLviv. Всі права захищені .</span>
        </div>
      </div>
    </footer>
  );
}
