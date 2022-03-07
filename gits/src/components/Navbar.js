// import React from 'react'
// const Navbar = () => {

//     return (
//         <div className="navbar flex-col shadow-lg bg-neutral text-neutral-content">
//             <div className="flex-1 px-2 mx-2">
//                 <span className="text-lg font-bold">Daisy Photo Gallery</span>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title}) => {
    return (
        <nav className="navbar flex-col shadow-lg bg-neutral text-neutral-content">
            <h1><i className={icon} /> {title} </h1>
            <div className="btn-container">
                    <Link to='/' className="btn-anim btn-hover">Home</Link>
                    <Link to='/about' className="btn-anim btn-hover">About</Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title:  'Github Finder', 
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar