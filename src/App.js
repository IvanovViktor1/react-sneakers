import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Axios from "axios";

export const AppContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        await Axios.get(
          "https://64c97ea1b2980cec85c247be.mockapi.io/cart"
        ).then(function (response) {
          setCartItems(response.data);
        });

        await Axios.get(
          "https://64d002c0ffcda80aff525d56.mockapi.io/favorites"
        ).then(function (response) {
          setFavorites(response.data);
        });

        await Axios.get(
          "https://64c97ea1b2980cec85c247be.mockapi.io/items"
        ).then(function (response) {
          setItems(response.data);
          response.statusText === "OK"
            ? setIsLoading(false)
            : setIsLoading(true);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

  const onRemoveItem = (id) => {
    try {
      Axios.delete(`https://64c97ea1b2980cec85c247be.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const onUnlikedItem = (id) => {
    try {
      Axios.delete(
        `https://64d002c0ffcda80aff525d56.mockapi.io/favorites/${id}`
      );
      setFavorites((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const onAddToFavorite = (obj) => {
    const postToAdd = (obj) => {
      Axios.post("https://64d002c0ffcda80aff525d56.mockapi.io/favorites", obj)
        .then(function (response) {
          console.log(response.statusText);
          response.statusText === "Created" &&
            Axios.get(
              "https://64d002c0ffcda80aff525d56.mockapi.io/favorites"
            ).then(function (response) {
              setFavorites(response.data);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const checkIncludes = (obj) => {
      favorites.find((item) => item.sku === obj.sku) === undefined
        ? postToAdd(obj)
        : onUnlikedItem(favorites.find((item) => item.sku === obj.sku).id);
    };
    checkIncludes(obj);
  };

  const onAddToCart = (obj) => {
    const postToAdd = (obj) => {
      Axios.post("https://64c97ea1b2980cec85c247be.mockapi.io/cart", obj)
        .then(function (response) {
          response.statusText === "Created" &&
            Axios.get("https://64c97ea1b2980cec85c247be.mockapi.io/cart").then(
              function (response) {
                setCartItems(response.data);
              }
            );
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const checkIncludes = (obj) => {
      cartItems.find((item) => item.sku === obj.sku) === undefined
        ? postToAdd(obj)
        : onRemoveItem(cartItems.find((item) => item.sku === obj.sku).id);
    };
    checkIncludes(obj);
  };

  const onChangeSearshInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        items,
        setItems,
        cartItems,
        setCartItems,
        favorites,
        setFavorites,
        searchValue,
        setSearchValue,
        cartOpened,
        setCartOpened,
        totalPrice,
        isOrderCompleted,
        setIsOrderCompleted,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          onRemoveAll={"onRemoveItemsAll"}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="react-sneakers/"
            element={
              <Home
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                onChangeSearshInput={onChangeSearshInput}
              />
            }
            exact
          />
        </Routes>

        <Routes>
          <Route
            path="react-sneakers/favorites"
            element={
              <Favorites
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                onChangeSearshInput={onChangeSearshInput}
              />
            }
            exact
          />
        </Routes>

        <Routes>
          <Route
            path="react-sneakers/orders"
            element={
              <Orders
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                onChangeSearshInput={onChangeSearshInput}
              />
            }
            exact
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
