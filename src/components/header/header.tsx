import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                   <Link to="/login">Login</Link>                                   
                </li>
                <li>
                   <Link to="/">Home</Link>                                   
                </li>
            </ul>
        </nav>
    )
}