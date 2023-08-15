import React from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const Info = ({ title, image, description }) => {
  const { setCartOpened, setIsOrderCompleted } = React.useContext(AppContext);

  return (
    <div className="d-flex align-center justify-center mr-0">
      <div className="itemEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} height={120} src={image} alt="" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <Link
          to="/react-sneakers/"
          className="greenButton align-center text-center mr-0"
        >
          <button
            onClick={() => {
              setCartOpened(false);
              setIsOrderCompleted(false);
            }}
            className="greenButton"
          >
            <img src="img/Arrow.svg" alt="Arrow" /> Вернуться назад
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
