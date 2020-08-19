import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        srcset=""
      />
      <div className="home__row">
        <Product
          id="12345687"
          title="The Lean Startup : How Constant Innovation Creates Redicaly Successful Bussinesses Papperback"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg"
        />

        <Product
          id="12345687"
          title="Publication Manual of the American Psychological…"
          price={20.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41pbe4-oNpL._AC_SX184_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345687"
          title="School Zone - Big Preschool Workbook - A"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._AC_SX184_.jpg"
        />

        <Product
          id="12345687"
          title="Where the Crawdads Sing"
          price={12.9}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/51NYjNgldSL._AC_SX184_.jpg"
        />

        <Product
          id="12345687"
          title="Midnight Sun Stephenie MeyerStephenie "
          price={11.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._AC_SX184_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345687"
          title="Brown Bear, Brown Bear, What Do You See?"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
