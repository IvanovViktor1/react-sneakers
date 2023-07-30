function Header() {
  return (
    <header className="d-flex justify-between align-center p-30">
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

      <ul className="d-flex">
        <li className="mr-30">
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
          <span>1205 руб.</span>
        </li>
        <li>
          <svg
            className="mr-10"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-.164c0-2.206,1.794-4,4-4s4,1.794,4,4v.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm9.925-1.113c-.456-2.859-2.939-5.051-5.925-5.051s-5.468,2.192-5.925,5.051c-2.47-1.823-4.075-4.753-4.075-8.051C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.298-1.605,6.228-4.075,8.051Zm-5.925-15.051c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"
              fill="gray"
            />
          </svg>
        </li>
      </ul>
    </header>
  );
}

export default Header;
