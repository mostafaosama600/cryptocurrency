import React from "react";
import style from "./CoinsItem.module.css";

const CoinsItem = (props) => {
  return (
    <>
      <div className={style.coinRow}>
        <p>{props.coins.market_cap_rank}</p>
        <div className={style.imgSymbol}>
          <img src={props.coins.image} alt="name" />
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.market_cap_change_percentage_24h.toFixed(2)}%</p>
        <p className={style.hideMobile}>
          ${props.coins.total_volume.toLocaleString()}
        </p>
        <p className={style.hideMobile}>
          ${props.coins.market_cap.toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default CoinsItem;
