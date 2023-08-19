import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        actions.loadSomeDataPlanet(id, setPlanet);
    }, [id]);

    if (!planet) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container container d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">Diameter: {planet.diameter}</p>
                    <p className="card-text">Rotation Period: {planet.rotation_period}</p>
                    <p className="card-text">Orbital Period: {planet.orbital_period}</p>
                    <p className="card-text">Gravity: {planet.gravity}</p>
                    <p className="card-text">Population: {planet.population}</p>
                </div>
            </div>
        </div>
    );
};
