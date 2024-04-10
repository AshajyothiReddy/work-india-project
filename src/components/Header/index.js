import { Link } from "react-router-dom"
import './index.css';

function Header() {
    return (
    <div className="navbar">
        <Link to = "/">
            <h1 className="heading">MovieDb</h1>
        </Link>
        <ul className="nav-list">
            <Link to="/">
                <li className="nav-list-item">Popular</li>
            </Link>
            <Link to="/top-rated">
                <li className="nav-list-item">Top Rated</li>
            </Link>
            <Link to="/upcoming">
                <li className="nav-list-item">Upcoming</li>
            </Link>
        </ul>
        <input type="search" placeholder="Movie Name" className="search-bar"></input>
        <button type="button" className="search-btn">Search</button>
    </div>
    )
}

export default Header;
