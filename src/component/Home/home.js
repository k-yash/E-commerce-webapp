import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content-page">
      <div>
        <Link to="/Products">
          <img
            className="banner"
            src="https://m.media-amazon.com/images/S/aplus-media/sc/7586170e-718b-4d0e-949e-1907e2c56953.__CR0,0,970,300_PT0_SX970_V1___.jpg"
            alt=""
          />
        </Link>
        {/* https://m.media-amazon.com/images/S/aplus-media/sc/eb17d097-f571-4f89-825b-4d8bb5f5dd34.__CR0,0,970,300_PT0_SX970_V1___.jpg */}
      </div>
      <div className="home-sub-title">Explore</div>
      <div className="home-recommendations">
        <div className="home-product">
          <Link className="home-product-link" to="/Products">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61m8ZyGvL2L._SL1500_.jpg"
              alt=""
            />
            <div className="sub-title">Headset</div>
          </Link>
        </div>
        <div className="home-product">
          <Link className="home-product-link" to="/Products">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/519ugH7N42S._SL1100_.jpg"
              alt=""
            />
            <div className="sub-title">Webcam</div>
          </Link>
        </div>
        <div className="home-product">
          <Link className="home-product-link" to="/Products">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71gUogqnbrL._SL1500_.jpg"
              alt=""
            />
            <div className="sub-title">Mic</div>
          </Link>
        </div>
        <div className="home-product">
          <Link className="home-product-link" to="/Products">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71Xymtt5czL._SL1500_.jpg"
              alt=""
            />
            <div className="sub-title">Arm Stand</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
