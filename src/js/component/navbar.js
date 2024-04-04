import React from "react";
import { Link } from "react-router-dom";

///FOOTER WILL HAVE: 
//1. StartWars logo//
//2. Botton with Favorite Dropdown y button inside to delete favorites//

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1zFjG1fuitDiUaDDv_M8WNLUiBqx1c8fgjyHvB4Ngw&s" alt="Logo" style={{ width: '80px', height: 'auto', marginLeft: '50px' }} />
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: '20px'}}>
   Favoritos
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><button className="dropdown-item" type="button">Action</button></li>
    
  </ul>
        </nav>
    );
};

