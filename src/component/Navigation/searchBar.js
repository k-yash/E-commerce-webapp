import { useProduct } from "../../productContext";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const { onSearchData } = useProduct();

  return (
    <Link to="/products" className="link-box">
      <input
        className="search-bar"
        placeholder="Search for Products"
        onChange={onSearchData}
      />
    </Link>
  );
};
