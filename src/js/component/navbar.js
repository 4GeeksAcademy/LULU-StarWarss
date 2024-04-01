import React from "react";
import { Link } from "react-router-dom";

///FOOTER WILL HAVE: 
//1. StartWars logo//
//2. Botton with Favorite Dropdown y button inside to delete favorites//

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1zFjG1fuitDiUaDDv_M8WNLUiBqx1c8fgjyHvB4Ngw&s" alt="Logo" style={{ width: '50px', height: 'auto', marginLeft: '50px' }} />
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link>
            </div>
        </nav>
    );
};

