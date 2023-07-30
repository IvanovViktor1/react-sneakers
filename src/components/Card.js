function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/Unliked.svg" alt="Unliked" />
      </div>

      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские кроссовки New Balance 2002R</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <div className="add">
          <img src="/img/btn-plus.svg" alt="Unchecked" />
        </div>
      </div>
    </div>
  );
}

export default Card;
