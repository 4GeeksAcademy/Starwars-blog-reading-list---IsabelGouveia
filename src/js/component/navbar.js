import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteFavorite = (index) => {
        actions.deleteFavorite(index);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/main">
                <div className="container">
                    <img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-PNG-Photos.png" className="navbar-brand mb-0 h1" style={{ height: '50px' }} />
                </div>
            </Link>
            <div className="dropdown mx-5 p-3">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {store.favorites.map((favorite, index) => (
                        <li key={index}>
                            {favorite}{" "}
                            <i class="far fa-trash-alt mx-2" onClick={() => handleDeleteFavorite(index)}></i>
                        </li>
                    ))}
                    {store.favorites.length === 0 && <li className="dropdown-item">No Favorites</li>}
                </ul>
            </div>
        </nav>
    );
};


