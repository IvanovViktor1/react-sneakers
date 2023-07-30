import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-30">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div className="card">
            <div className="favorite">
              <img src="/img/Liked.svg" alt="Liked" />
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки New Balance 2002R</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <div className="add">
                <img src="/img/btn-checked.svg" alt="Unchecked" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/Liked.svg" alt="Liked" />
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки New Balance 2002R</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <div className="add">
                <img src="/img/btn-checked.svg" alt="Unchecked" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/Liked.svg" alt="Liked" />
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки New Balance 2002R</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>

              <div className="add">
                <img src="/img/btn-checked.svg" alt="Unchecked" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
