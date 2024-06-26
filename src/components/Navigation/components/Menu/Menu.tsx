import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export const Menu: React.FC = () => {
  return (
    <aside className="menu__page menu" id="menu">
      <div className="menu__block">
        <div className="menu__top">
          <Link to="/" className="icon icon--logo">
            <img src="nav/logo.svg" alt="logo" />
          </Link>
          <Link to="/" className="icon icon--block icon--close">
            <img src="nav/close.svg" alt="close" />
          </Link>
        </div>
        <ul className="menu__ul">
          <li className="menu__list">
            <Link to="home" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/product/phones" className="menu__link">
              Phones
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/product/tablets" className="menu__link">
              Tablets
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/product/accessories" className="menu__link">
              Accessories
            </Link>
          </li>
        </ul>
      </div>

      <div className="menu__bottom">
        <Link
          to="/favorites"
          className="icon icon--nav-menu icon--nav-favourites"
        >
          <img src="nav/favourites.svg" alt="favourites" />
        </Link>
        <Link to="/cart" className="icon icon--nav-menu icon--nav-cart">
          <img src="nav/cart.svg" alt="cart" />
        </Link>
      </div>
    </aside>
  );
};
