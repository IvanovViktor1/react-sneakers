import React from "react";
import Card from "../components/Card";
import Info from "../components/Info";
import { AppContext } from "../App";

function Favorites({ onAddToFavorite, onAddToCart, onChangeSearshInput }) {
  const { favorites, searchValue, setSearchValue } =
    React.useContext(AppContext);
  const renderFavorites = () => {
    return favorites.length > 0 ? (
      <div className="d-flex flex-wrap">
        {favorites
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <div className="favorites">
              <Card
                key={item.sku}
                title={item.title}
                price={item.price}
                sku={item.sku}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            </div>
          ))}
      </div>
    ) : (
      <div className="favoritesEmpty">
        <Info
          title={"У вас нет избранных товаров"}
          description={"Добавьте понравившийся товар"}
          image={"/img/no-favorites.jpg"}
        />
      </div>
    );
  };
  return (
    <div className=" content p-30">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/Search.svg" alt="Search" />
          <input
            onChange={onChangeSearshInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="btn-close"
              src="/img/btn-close.svg"
              alt="Clear"
            />
          )}
        </div>
      </div>
      {renderFavorites()}
    </div>
  );
}
export default Favorites;
