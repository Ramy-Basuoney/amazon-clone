import React from "react";

// ICON IMPORT
import { VscThreeBars } from "react-icons/vsc";

// STYLE IMPORT
import "./BotNav.scss";

const BotNav = () => {
  return (
    <nav className="nav">
      <div className="nav__right">
        <ul className="list">
          <li>
            <VscThreeBars className="menu-icon" />
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Today's Deals</a>
          </li>
          <li>
            <a href="/">Customer Service</a>
          </li>
          <li>
            <a href="/">Registry</a>
          </li>
          <li>
            <a href="/">Sell</a>
          </li>
        </ul>
      </div>
      <div className="nav__left">
        <p>Shop Cyber Monday Deals</p>
      </div>
    </nav>
  );
};

export default BotNav;
