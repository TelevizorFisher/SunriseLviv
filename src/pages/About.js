import React from "react";
import Phone from "../components/Phone/Phone";
import Tabs from "../components/Tabs/Tabs";

export default function About() {
  return (
    <div className="container">
      <div className="title">
        <span>Про нас</span>
      </div>
      <Tabs />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
      <Phone />
    </div>
  );
}
