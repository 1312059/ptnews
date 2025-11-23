import {useState} from 'react'
import "./Header.css"
import Container from "react-bootstrap/Container";
import MyImage from "./shop logo.png";
import { Link } from "react-router-dom";


function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false)

    function handleMenuClick() {
        setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
    }

    let dropdownMenuClasses ="custom-dropdown-menu";
    if (isDisplayed) {
        dropdownMenuClasses += " display-mobile-menu";
    }


    return (
        <header className="Header">
            <nav className="nav bg-dark w-100">
          <Container className="d-flex justify-content-between align-items-center">
            <Link to="/" className="p-3">
              <img src={MyImage} alt="logo"/>
            </Link>
          
          <ul className={dropdownMenuClasses}>
            <li className={isDisplayed ? "container" : null }>
                <Link to="/category/politics" className="p-3 text-uppercase text-light">
                    Politics
                </Link>
            </li>

             <li className={isDisplayed ? "container" : null}>
                <Link to="/category/environment" className="p-3 text-uppercase text-light">
                    Environment
                </Link>
            </li>

             <li className={isDisplayed ? "container" : null}>
                <Link to="/category/culture" className="p-3 text-uppercase text-light">
                    For You
                </Link>
            </li>
          </ul>
          </Container>
          </nav>
        </header>
    );
}

export default Header;