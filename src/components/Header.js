import React from "react";
import {Link as Scroll} from 'react-scroll';

const Header = () =>{
    return(
<header>
    <div class="container">
      <nav class="gnav">
        <ul class="gnav-list">
          <li class="gnav-item">
          <Scroll  to = "scroll_title" smooth={true} duration={600}>Home</Scroll>
            </li>
          <li class="gnav-item">
          <Scroll  to = "about" smooth={true} duration={600}>About</Scroll>
            </li>
          <li class="gnav-item">
          <Scroll  to = "works" smooth={true} duration={600}>works</Scroll>
            </li>
          <li class="gnav-item">
          <Scroll to = "skill" smooth={true} duration={600}>Skill</Scroll>
          </li>
          <li class="gnav-item">
          <Scroll to = "others" smooth={true} duration={600}>Others</Scroll>
          </li>
        </ul>
      </nav>
    </div>
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