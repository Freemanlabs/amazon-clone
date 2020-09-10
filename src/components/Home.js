import React from "react";
import "../assets/css/home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="home banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="WisToyz Bubble Machine Dog Bubble Blower 500+ Bubbles Per Minute, Bubble Machine for Kids Toddlers Boys Girls Baby Bath Toys Indoor Outdoor Automatic Bubble Maker Easy to Use 2 AA Batteries Needed"
            price={159.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41GgsX2iHkL._SCLZZZZZZZ___AA210_.jpg"
            rating={5}
          />

          <Product
            id="2"
            title="LBell Night Light Projector 3 in 1 Galaxy Projector Star Projector w/LED Nebula Cloud for Baby Kids Bedroom/Game Rooms/Home Theatre/Night Light Ambiance with Bluetooth Music Speaker"
            price={22.09}
            image="https://images-na.ssl-images-amazon.com/images/I/41kygBpa3iL._SCLZZZZZZZ___AA200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="iPhone X Case | iPhone Xs Case [ Military Grade ] 15ft. Drop Tested Protective Case | Kickstand | Compatible with Apple iPhone X Case | iPhone Xs Case- Black"
            price={29.9}
            image="https://images-na.ssl-images-amazon.com/images/I/619BFeeFKIL._SCLZZZZZZZ___AA200_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Cable Concealer on Wall Raceway - Paintable Cord Cover for Wall Mounted TVs - Cable Management Kit Including Connectors &amp; Adhesive Strips Connected to Raceway"
            price={8.49}
            image="https://images-na.ssl-images-amazon.com/images/I/41jBDGfTdeL._SCLZZZZZZZ___AA200_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="22 Pieces 5D Diamonds Painting Tools and Accessories Kits with Diamond Painting Roller and Diamond Embroidery Box for Adults or Kids"
            price={11.89}
            image="https://images-na.ssl-images-amazon.com/images/I/51h3id3yWLL._SCLZZZZZZZ___AA200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Diaper Bag Backpack, RUVALINO Multifunction Travel Back Pack Large Baby Bag"
            price={9.34}
            image="https://images-na.ssl-images-amazon.com/images/I/41lDheh4K+L._SCLZZZZZZZ___AA200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
