import React from "react";
import styles from "./Drawer.module.scss";
import Info from "../Info";
import Axios from "axios";
import { useCart } from "../../hooks/useCart";

function Drawer({ onClose, onRemove, onRemoveAll, opened }) {
  const { cartItems, setCartItems, totalPrice, deleteCartItems } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await Axios.post(
        "https://64d002c0ffcda80aff525d56.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      deleteCartItems();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <div className="d-flex justify-between align-center">
          <h2>Корзина</h2>

          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </div>

        <h5 className="clearCart mb-10" onClick={() => deleteCartItems()}>
          {isOrderCompleted ? "" : "Отчистить корзину"}
        </h5>

        {cartItems.length !== 0 ? (
          <div className="d-flex flex-column flex">
            <div className={styles.items}>
              {cartItems.map((item) => (
                <div
                  key={item.sku}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <div>
                    <p className="sku">{item.sku}</p>
                    <img
                      className="removeBtn"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                      onClick={() => onRemove(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>

                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(2)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ
                <img src="/img/Arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ # ${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы пару кроссовок, чтобы сделать заказ"
            }
            image={
              isOrderCompleted
                ? "/img/order-completed.png"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
