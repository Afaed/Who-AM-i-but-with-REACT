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
            <ul>
                <li className = {contactSelected && 'nanActive'}>
                    <span onClick = {() => setContactSelected(true)}>
                    </span>
                    < a data-testid = "contact" href ="#Contact-Me">Contact-me</a>
                </li>
                <li> 
                    <a data-testid = "about" href="#About-Me" onClick = {() => setContactSelected(false)}>About Me!</a>
                </li>
                <li>
                    <a href="#Selected-Works">Selected Works</a>
                </li>
            </ul>
        </nav>

    )
}
export default Nav;