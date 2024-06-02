import React from "react";
import {Link as Scroll} from 'react-scroll';

const Header = () =>{
    return(
    <header>
        <div className="logo">
            <h3>ポートフォリオサイト</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Scroll to = "scroll_title" smooth={true} duration={600}>Home</Scroll>
                </li>
                <li>
                    <Scroll to = "about" smooth={true} duration={600}>About</Scroll>
                </li>
                <li>
                    <Scroll to = "works" smooth={true} duration={600}>Work</Scroll>
                </li>
                <li>
                    <Scroll to = "skill" smooth={true} duration={600}>Skill</Scroll>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;

/*
const Header = () =>{
    return <div>Header</div>
}

export default Header;
*/