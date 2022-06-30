import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Explore } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as Profile } from "../assets/svg/personOutlineIcon.svg";
import { ReactComponent as Offers } from "../assets/svg/localOfferIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <footer className="navbar">
      <div className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <Explore
              fill={pathMatchRoute("/") ? "#00cc66" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <Offers
              fill={pathMatchRoute("/offers") ? "#00cc66" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <Profile
              fill={pathMatchRoute("/profile") ? "#00cc66" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Navbar;
