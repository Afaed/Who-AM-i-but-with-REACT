import React, { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'
function Nav (props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected
    } = props
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory])
    
    return (
        <header className="header">
                    <h1>Welcome to Justin's Private Portfolio!</h1>
        <nav>
            <ul>
                <li>
                    <a href="#Contact-Me">Contact-me</a>
                </li>
                <li>
                    <a href="#About-Me">About Me!</a>
                </li>
                <li>
                    <a href="#Selected-Works">Selected Works</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}
export default Nav