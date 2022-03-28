import React, { useEffect } from "react";
import Header from "../Header"
function Nav (props) {
    const {
        category = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected
    } = props
    
    return (
        <nav>
            <ul className="flex-row">
                <li className = {contactSelected && 'navActive'}>
                    <span onClick = {() => setContactSelected(true)}>
                    </span>
                    < a data-testid = "contact" href ="#Contact-Me">Contact-me</a>
                </li>
                <li> 
                    <a data-testid = "about" href="#About-Me" onClick = {() => setContactSelected(false)}>About Me!</a>
                </li>
                <li className = {contactSelected && 'navActive'} key = {category.name}>
                    <a data-testid = "selected" href="#Selected-Works" onClick = {() => setContactSelected(false)}>
                    <span onCLick = {currentCategory.name === category.name && !contactSelected && 'navActive'}>
                    </span>
                    Selected Works</a>
                </li>
                <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              ></span>
            </ul>
        </nav>

    )
}
export default Nav;