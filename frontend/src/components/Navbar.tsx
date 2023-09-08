import React, { useState, useEffect } from "react";
import logo from "./../assets/logo_clinic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar :React.FC= () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setNavbar]= useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const handletoggle =()=> {
             
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setNavbar(prevState => !prevState);

  };

  const isBackgroundWhite = scrollY > 100;

  return (
    <header
      className={`nav ${isBackgroundWhite ? "background-white" : "back"}`}
    >
      <h1>
        <img src={logo} alt="" className="logo" /> ClinicManage.
      </h1>

      <div className="bars d-flex justify-content-end">
        <FontAwesomeIcon
        onClick={handleToggleClick}
          icon={faBars}
          className="text-right navbar-toggler d-block d-md-none"
          id="bars"
        />
      </div>

      <nav className={`n ${isVisible ? "visible" : "invisible"}`}>
        <ul className="text-center">
          <li>
            {" "}
            <h1 className="h1">Accueil</h1>
          </li>
          <li>
            <h1 className="h1">Qui sommes nous</h1>
          </li>
          <li>
            {" "}
            <h1 className="h1">Nos Services</h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
