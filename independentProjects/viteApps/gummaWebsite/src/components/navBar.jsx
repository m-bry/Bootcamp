import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <div>
            <li>
                <Link to='/page1'>page1</Link>
            </li>
            <li>
                <Link to='/page2'>page2</Link>
            </li>
            <li>
                <Link to='/page3'>page3</Link>
            </li>
            <li>
                <Link to='/page4'>page4</Link>
            </li>
        </div>
    );
}
export default NavBar;