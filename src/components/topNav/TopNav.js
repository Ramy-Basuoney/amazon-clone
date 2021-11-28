import React from "react";

// ICONS IMPORT
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

// IMAGES IMPORT
import AmazonLogo from "../../images/amazon-logo.svg";
import EgyptFlag from "../../images/egypt.png";

// STYLLE FILE
import "./TopNav.scss";

const TopNav = () => {
  return (
    <header className="top-header">
      <div className="top-header__image">
        <img src={AmazonLogo} alt="" />
      </div>
      <div className="top-header__deliver-to">
        <HiOutlineLocationMarker className="location-icon" />
        <div className="deliver">
          <span>Deliver to</span>
          <span>Egypt</span>
        </div>
      </div>
      <div className="top-header__search">
        <div className="categories">
          <select>
            <option>All</option>
            <option>Sport</option>
            <option>Classic</option>
            <option>Original</option>
          </select>
        </div>
        <div className="search-bar">
          <input type="search" />
        </div>
        <button>
          <GoSearch className="search-icon" />
        </button>
      </div>
      <div className="top-header__flag">
        <img src={EgyptFlag} alt="" />
        <IoMdArrowDropdown className="arrow-down" />
      </div>
      <div className="top-header__account-list">
        <span>Hello, Sign in</span>
        <div>
          <span>Account &amp; Lists</span>
          <IoMdArrowDropdown className="arrow-down" />
        </div>
      </div>
      <div className="top-header__orders">
        <span>Returns</span>
        <span>&amp; Orders</span>
      </div>
      <div className="top-header__cart">
        <div>
          <MdOutlineShoppingCart className="cart-icon" />
          <span className="quantity">0</span>
        </div>
        <div>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
