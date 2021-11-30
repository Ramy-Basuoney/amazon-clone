import React from "react";
import Categories from "../../components/categories/Categories";
import Slides from "../../components/slider/Slides";
import "./HomeScreen.scss";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Slides />
      <Categories />
    </div>
  );
};

export default HomeScreen;
