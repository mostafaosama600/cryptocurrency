import React from "react";
import { FaCoins } from "react-icons/fa";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <FaCoins className={style.icon} />
        <h2>
          Coin <span className={style.purpul}>Search</span>
        </h2>
      </div>
    </>
  );
};

export default Navbar;
