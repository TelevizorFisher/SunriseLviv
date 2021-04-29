import React, { useEffect, useState } from "react";
import ModalAddContainer from "../ModalAddContainer";
import Product from "./Product/Product";
import s from "./Product/Product.module.scss";

const MyProduct = (props) => {
  let SortCountHandler = () => {
    props.SortCountProd();
  };
  let SortNameHandler = () => {
	props.SortNameProd();
 };
  useEffect(() => {
    setProducts(props.product);
  }, [props]);
  const [products, setProducts] = useState([]);

  let productElement = products.map((c) => (
    <Product
      id={c.id}
      name={c.name}
      photo={c.photo}
      count={c.count}
      weight={c.weight}
      description={c.description}
      key={c.id}
      deleteId={c.id}
      products={products}
      setProducts={setProducts}
    />
  ));

  return (
    <div className={s.portfolio__body}>
      {productElement}
{/*       <div className={s.portfolio__cartAdd}>
        <span>
          Додати товар
          <ModalAddContainer store={props.store} />
        </span>
        <div>
          {" "}
          <span className={s.portfolio__buttonDel} onClick={SortNameHandler}>
            Сортувати за назвою
          </span>{" "}
          <span className={s.portfolio__buttonDel} onClick={SortCountHandler}>
            Сортувати за кількістю
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default MyProduct;
