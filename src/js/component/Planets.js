import React, { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planets = (props) => {
    const { store, actions } = useContext(Context);

    const [planetDetails, setPlanetDetails] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.tech/api/planets/${props.index}`)
            .then(response => response.json())
            .then(data => {
                setPlanetDetails(data.result.properties);
            })
            .catch(error => {
                console.error("Error fetching planet details");
            });
    }, [props.index]);

    if (!planetDetails) {
        return <p>Loading...</p>;
    }

    const handleAddFavorite = (item) => {
        actions.addFavorite(item);
    };

    return (
        <div className="col-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="https://via.placeholder.com/400x200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{planetDetails && planetDetails.name ? planetDetails.name : ""}</h5>
                    <p className="card-text">Diameter: {planetDetails && planetDetails.diameter ? planetDetails.diameter : ""}</p>
                    <p className="card-text">Rotation Period: {planetDetails && planetDetails.rotation_period ? planetDetails.rotation_period : ""}</p>
                    <p className="card-text">Orbital Period: {planetDetails && planetDetails.orbital_period ? planetDetails.orbital_period : ""}</p>
                    <p className="card-text">Gravity: {planetDetails && planetDetails.gravity ? planetDetails.gravity : ""}</p>
                    <p className="card-text">Population: {planetDetails && planetDetails.population ? planetDetails.population : ""}</p>
                    <Link to={`/planetsDetails/${props.index}`}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>
                    <button className="btn btn-warning mx-2" onClick={() => { handleAddFavorite(props.planet.name) }}>
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

