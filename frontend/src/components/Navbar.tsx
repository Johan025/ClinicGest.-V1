import React,{useState,useEffect} from "react";
import logo from "./../assets/logo_clinic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const isBackgroundWhite = scrollY > 100;
 
  return (

                 <header className={`nav ${isBackgroundWhite ? 'background-white' : 'back'}`}>
                 <h1><img src={logo} alt="" className='logo' /> ClinicManage.</h1>
     
                         <ul>
                           
                             <li> <h1 className='h1'>Accueil</h1></li>
                             <li><h1 className='h1'>Qui sommes nous</h1></li>
                             <li> <h1 className='h1'>Nos Services</h1></li>
                             
                         </ul>

                         <h2 id="contact" className="text-end">Nous contacter</h2>
                 </header>
  


   
  );
}


export default Navbar;
