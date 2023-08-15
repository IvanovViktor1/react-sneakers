import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-30">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            className="mr-5"
            width={40}
            height={40}
            src="/img/logo-sneakers.png"
            alt=""
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <svg
            className="mr-5"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M3.69,7H0v-2H3.45l.24,2ZM0,13v2H4.63l-.24-2H0Zm3.92-4H0v2H4.16l-.24-2Zm17.67,6H8.65l.13,1.12c.06,.5,.49,.88,.99,.88h11.22v2H9.78c-1.52,0-2.8-1.14-2.98-2.65L5.21,2.88c-.06-.5-.49-.88-.99-.88H2V0h2.22c1.52,0,2.8,1.14,2.98,2.65l.04,.35H23.99l-2.4,12Zm-.04-10H7.48l.94,8h11.53l1.6-8Zm-12.55,15c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm9,0c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z"
              fill="gray"
            />
          </svg>
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              onClick={props.onClickFavorites}
              src="/img/heart.svg"
              alt="heart"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              className="mr-20 cu-p"
              onClick={props.onClickOrders}
              src="/img/account.svg"
              alt="heart"
            ></img>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
