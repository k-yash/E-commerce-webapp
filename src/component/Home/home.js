import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content-page">
      <Link to="/Products">
        <img
          className="banner"
          src="https://lapal.info/wp-content/uploads/2020/03/6946leg-press1-1247x548-1.jpg"
          alt=""
        />
      </Link>

      <Link to="/Products">
        <img
          className="banner"
          src="https://www.trackandtrail.in/sites/all/themes/adaptivetheme/at_subtheme/images/category-banner.png"
          alt=""
        />
      </Link>

      <Link to="/Products">
        <img
          className="banner"
          src="https://lapal.info/wp-content/uploads/2020/03/6946leg-press1-1247x548-1.jpg"
          alt=""
        />
      </Link>

      <Link to="/Products">
        <img
          className="banner"
          src="https://www.trackandtrail.in/sites/all/themes/adaptivetheme/at_subtheme/images/category-banner.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Home;
