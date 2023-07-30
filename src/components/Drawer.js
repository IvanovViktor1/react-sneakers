function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <div className="mb-30 d-flex justify-between align-center">
          <h2>Корзина</h2>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 2002R</p>
              <b>12 000 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/4.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/5.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/6.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/7.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/8.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/9.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки New Balance 1002R</p>
              <b>16 400 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            ></img>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>

            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 418 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            <p>Оформить заказ</p>
            <img src="/img/Arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
