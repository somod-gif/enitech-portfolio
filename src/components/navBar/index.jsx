import React, { useState } from "react";
// import { FaReact } from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import './style.scss'
import './style.css'
// import '../../index.css'
const data = [
  {
    lablel: "HOME",
    to: "/",
  },
  {
    lablel: "ABOUT ME",
    to: "/about",
  },
  {
    lablel: "SKILLS",
    to: "/skills",
  },
  {
    lablel: "RESUME",
    to: "/resume",
  },
  {
    lablel: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    lablel: "CONTACT ME",
    to: "/contact",
  },
];

const Navbar = () => {

  const [toggleIcon, setToggleIcon] = useState(false)
  

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)  
  }
  return (
    <div>
      <nav className="navbar">
        <div className="nav__container">
          <Link to={"/"} className="navbar__container__logo">
           <h2>Enitech</h2>
            {/* <FaReact size={35} /> */}
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''} `}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.lablel}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
