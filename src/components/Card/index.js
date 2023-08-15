import React from "react";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";
import ContentLoader from "react-content-loader";

function Card({ title, imageUrl, price, sku, onFavorite, onPlus }) {
  const { isLoading, cartItems, favorites } = React.useContext(AppContext);

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price, sku });
  };

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price, sku });
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={1}
          width={178}
          height={251}
          viewBox="0 0 155 265"
          backgroundColor="#e7f3f0"
          foregroundColor="#c4ddd9"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={
                favorites.find((item) => item.sku === sku) === undefined
                  ? "/img/Unliked.svg"
                  : "/img/Liked.svg"
              }
              alt="Unliked"
            />
            <h5 className="sku">арт.{sku}</h5>
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={
                cartItems.find((item) => item.sku === sku) === undefined
                  ? "/img/Plus.svg"
                  : "/img/btn-checked.svg"
              }
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
