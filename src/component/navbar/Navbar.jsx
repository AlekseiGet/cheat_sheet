import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar' >
           <div className="navbar_link">
                <Link to="/javascript">JavaScript</Link>
                <Link to="/example">Примеры решений</Link>
            </div> 
        </div>
    );
};

export default Navbar;