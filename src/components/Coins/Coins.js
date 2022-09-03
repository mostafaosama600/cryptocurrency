import React from "react";
import CoinsItem from "../Items/CoinsItem";
import style from "./Coins.module.css";

const Coins = (props) => {
  return (
    <>
      <div className={style.container}>
        <div>
          <div className={style.headings}>
            <p>#</p>
            <p className={style.coinName}>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className={style.hideMobile}>Coin</p>
            <p className={style.hideMobile}>mkt cat</p>
          </div>
          {props.coins.map((coins) => {
            return <CoinsItem coins={coins} key={coins.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Coins;
