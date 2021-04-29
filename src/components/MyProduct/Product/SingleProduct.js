import React from "react";
import { Link } from "react-router-dom";
import ModalAddSingleContainer from "../../ModalAddSingleContainer";
import MyPostsContainer from "../../Profile/MyPosts/MyPostsContainer";

import s from "./SingleProduct.module.scss";

function SingleProduct(props) {
  var hash = window.location.hash.substr(1);
  console.log("hash", hash);
  // var el = window.location.pathname;
  var id = parseInt(hash.match(/\d+/));
  const content = props.product.map((p) =>
    p.id === id ? (
      <section className="section cocktail-section">
        <h2 className="section-title">{p.name}</h2>
        <div className="drink">
          <div className={s.portfolio__cart_body}>
            <div
              className={s.portfolio__cart}
              style={{ backgroundImage: `url(${p.photo})` }}
            ></div>
          </div>
          <div className="drink-info">
            <p>
              <span className="drink-data">Назва :</span> {p.name}
            </p>
            <p>
              <span className="drink-data">Кількість:</span> {p.count}
            </p>
            <p>
              <span className="drink-data">Колір :</span> {p.color}
            </p>
            <p>
              <span className="drink-data">Вага :</span> {p.weight}
            </p>
            <p>
              <span className="drink-data">Опис :</span> {p.description}
            </p>
          </div>
        </div>
      </section>
    ) : (
      ""
    )
  );

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {content}
      <span className="section-title">Редагувати продукт</span>{" "}
      <ModalAddSingleContainer />
      <MyPostsContainer />
    </section>
  );
}
export default SingleProduct;
