import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>
	<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
		<ul className="navbar-nav">
			<li className="nav-item" style={{ margin: '10px' }}>
				<Link to="/" style={{ color: 'white' }}>
					Home
				</Link>
			</li>
			<li className="nav-item" style={{ margin: '10px' }}>
				<Link to="/signup" style={{ color: 'white' }}>
					S'inscrire
				</Link>
			</li>
			<li className="nav-item" style={{ margin: '10px' }}>
				<Link to="/login" style={{ color: 'white' }}>
					Connexion
				</Link>
			</li>
            <li className="nav-item" style={{ margin: '10px' }}>
				<Link to="/posts" style={{ color: 'white' }}>
					Posts
				</Link>
			</li>
            <li className="nav-item" style={{ margin: '10px' }}>
				<Link to="/profile" style={{ color: 'white' }}>
					Profil
				</Link>
			</li>
		</ul>
	</nav>

export default Navbar;