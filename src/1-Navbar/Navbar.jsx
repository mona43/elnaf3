import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation with reload
  const handleNavigation = (url) => {
    window.location.href = url; // Forces a reload of the page
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
              <a
                className="nav-link active"
                href="/"
                onClick={() => handleNavigation("/")}
              >
                الصفحه الرئيسيه
              </a>
            </li>
            <li className="nav-item d-none">
              <a className="nav-link" href="#" onClick={() => handleNavigation("#")}></a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/data"
                onClick={() => handleNavigation("/data")}
              >
                بيانات الشركه
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الشركات التابعه
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="text-end">
                  <a
                    className="dropdown-item"
                    href="/company1"
                    onClick={() => handleNavigation("/company1")}
                  >
                    الخير للاستثمار
                  </a>
                </li>
                <li className="text-end">
                  <a
                    className="dropdown-item"
                    href="/company2"
                    onClick={() => handleNavigation("/company2")}
                  >
                    أمان للخدمات المالية
                  </a>
                </li>
                <li className="text-end">
                  <a
                    className="dropdown-item"
                    href="/company3"
                    onClick={() => handleNavigation("/company3")}
                  >
                    المعرفه للتكنولوجيا
                  </a>
                </li>
                <li className="text-end">
                  <a
                    className="dropdown-item"
                    href="/company4"
                    onClick={() => handleNavigation("/company4")}
                  >
                    ريادة للاستشارات والتطوير
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact"
                onClick={() => handleNavigation("/contact")}
              >
                تواصل معنا
              </a>
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
