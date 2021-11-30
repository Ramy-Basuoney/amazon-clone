import React from "react";
import "./Categories.scss";
import LapTop from "../../images/lap.jpg";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__card">
        <div>
          <h2>Find your ideal TV</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>
      <div className="categories__card">
        <div>
          <h2>Electronics</h2>
          <img src={LapTop} alt="" />
          <a href="/">See more</a>
        </div>
      </div>

      <div className="categories__card">
        <div>
          <h2>Holiday Gifts</h2>
          <div className="image-container">
            <div className="top">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad_1X._SY116_CB654300275_.jpg"
                  alt=""
                />
                <h4>Electronics</h4>
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad2_1X._SY116_CB654300275_.jpg"
                  alt=""
                />
                <h4>Fashion</h4>
              </div>
            </div>
            <div className="bot">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad3_1X._SY116_CB654300275_.jpg"
                  alt=""
                />
                <h4>Toys</h4>
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad4_1X._SY116_CB654300275_.jpg"
                  alt=""
                />
                <h4>Beauty</h4>
              </div>
            </div>
          </div>
          <a href="/">Shop all gift guides</a>
        </div>
      </div>
      <div className="categories__card">
        <div>
          <h2>Electronics</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>

      <div className="categories__card">
        <div>
          <h2>Cyber Monday deals</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/November/CyberMonday/Fuji_Dash_CM_1X._SY304_CB652537520_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>
      <div className="categories__card">
        <div>
          <h2>Easy returns</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>
      <div className="categories__card">
        <div>
          <h2>Electronics</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>
      <div className="categories__card">
        <div>
          <h2>Electronics</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            alt=""
          />
          <a href="/">See more</a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
