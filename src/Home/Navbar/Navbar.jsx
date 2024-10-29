import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function mobileMenu() {
    setShowMenu(!showMenu);
  }

  // Navbar scroll
  useEffect(() => {
    const navbar = document.querySelector(".main-navbar");

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add("nav-active");
      } else {
        navbar.classList.remove("nav-active");
      }
    };
  }, []);
  return (
    <>
      <nav
        className="main-navbar h-14 flex justify-between content-center gap-2.5 max-w-full w-screen"
        id="navbar"
      >
        <Link className="logo-container" to="/#home">
          <span className="logo-icon">
            {/* <FontAwesomeIcon icon={faCameraRetro} /> */}
          </span>
          <h2 className="logo-title">Adrian Popowich</h2>
        </Link>

        <div className="nav-wrapper">
          <div
            className={`menu-icon ${showMenu ? "nav-active" : ""}`}
            onClick={mobileMenu}
          >
            <div className={`bar1 ${showMenu ? "bar1-active" : ""}`}></div>
            <div className={`bar2 ${showMenu ? "bar2-active" : ""}`}></div>
            <div className={`bar3 ${showMenu ? "bar3-active" : ""}`}></div>
          </div>
        </div>

        <div
          className={`nav-links-container flex gap-5 uppercase pr-5 ${
            showMenu ? "btn-active" : ""
          }`}
          onClick={mobileMenu}
        >
          <Link className="nav-link active" to="/#home">
            Home
          </Link>
          <Link className="nav-link" to="/#qualifications">
            Qualifications
          </Link>
          <Link className="nav-link" to="/#portfolio">
            Portfolio
          </Link>
          <Link className="nav-link" to="/#about">
            About
          </Link>
          <Link className="nav-link" to="/#contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
