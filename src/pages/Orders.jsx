import React from "react";
import Axios from "axios";
import Info from "../components/Info";
import Card from "../components/Card";
import "../index.scss";

function Orders() {
  const [isLoadingOrders, setIsLoadingOrders] = React.useState(true);
  const [orders, setOrders] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        await Axios.get(
          "https://64d002c0ffcda80aff525d56.mockapi.io/orders"
        ).then(function (response) {
          setOrders(response.data);
          response.statusText === "OK"
            ? setIsLoadingOrders(false)
            : setIsLoadingOrders(true);
        });
        setIsLoadingOrders(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const renderOrders = () => {
    return isLoadingOrders ? (
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : orders.length > 0 ? (
      orders.map((order) => (
        <>
          <h2>Заказ № {order.id}</h2>
          <div className="d-flex flex-wrap">
            {order.items.map((item) => (
              <div>
                <Card
                  isLoading={isLoadingOrders}
                  key={item.sku}
                  title={item.title}
                  price={item.price}
                  sku={item.sku}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </>
      ))
    ) : (
      <div className="ordersEmpty">
        <Info
          title={"У вас нет заказов"}
          description={"Оформите хотя бы один заказ."}
          image={"img/no-orders.jpg"}
        />
      </div>
    );
  };

  return (
    <div className="orders content p-30">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы </h1>
      </div>
      {renderOrders()}
    </div>
  );
}
export default Orders;
