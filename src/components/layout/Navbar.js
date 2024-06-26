import React from 'react';
import { Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" href="/">React User</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                        
                    </ul>

                </div>
                <Link className='btn btn-outline-light' to="/users/add">Add User</Link>

            </div>
        </nav>
    )
}
export default Navbar;