import { useState } from "react";
import { Link } from "react-router-dom";
function MenuItems() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  const [selectIndex, setSelectIndex] = useState("Home");
  console.log(selectIndex);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {menuItems.map((item, key) => (
            <li
              className={`nav-item ${
                selectIndex === item.label ? "bg-primary" : ""
              }`}
              key={key}
            >
              <Link
                className="nav-link"
                to={item.path}
                onClick={() => setSelectIndex(item.label)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  /**/
}
export default MenuItems;
