import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setIsOpen(false); 
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      dir="rtl"
      style={{
        backgroundColor: "#07092f",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/" ? "active" : ""
                }`}
                to="/"
                onClick={() => handleLinkClick("/")}
              >
                الصفحه الرئيسيه
              </Link>
            </li>
            <li className="nav-item d-none">
              <Link className="nav-link" to="#">
                {" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/data" ? "active" : ""
                }`}
                to="/data"
                onClick={() => handleLinkClick("/data")}
              >
                بيانات الشركه
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الشركات التابعه
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="text-end">
                  <Link
                    className={`dropdown-item ${
                      activeLink === "/company1" ? "active" : ""
                    }`}
                    to="/company1"
                    onClick={() => handleLinkClick("/company1")}
                  >
                    الخير للاستثمار
                  </Link>
                </li>
                <li className="text-end">
                  <Link
                    className={`dropdown-item ${
                      activeLink === "/company2" ? "active" : ""
                    }`}
                    to="/company2"
                    onClick={() => handleLinkClick("/company2")}
                  >
                    أمان للخدمات المالية
                  </Link>
                </li>
                <li className="text-end">
                  <Link
                    className={`dropdown-item ${
                      activeLink === "/company3" ? "active" : ""
                    }`}
                    to="/company3"
                    onClick={() => handleLinkClick("/company3")}
                  >
                    المعرفه للتكنولوجيا
                  </Link>
                </li>
                <li className="text-end">
                  <Link
                    className={`dropdown-item ${
                      activeLink === "/company4" ? "active" : ""
                    }`}
                    to="/company4"
                    onClick={() => handleLinkClick("/company4")}
                  >
                    ريادة للاستشارات والتطوير
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <img
          src="logo.jpg"
          width={40}
          height={45}
          className="navbar-brand rounded-5 mx-2"
          alt="Logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
