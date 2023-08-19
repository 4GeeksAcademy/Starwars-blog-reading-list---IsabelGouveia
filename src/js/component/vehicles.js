import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicles = (props) => {
    const { store, actions } = useContext(Context);
    
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.tech/api/vehicles/${props.index}`)
            .then(response => response.json())
            .then(data => {
                setVehicleDetails(data.result.properties);
            })
            .catch(error => {
                console.error("Error fetching vehicle details");
            });
    }, [props.index]);

    if (!vehicleDetails) {
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
                    <h5 className="card-title">{vehicleDetails && vehicleDetails.name ? vehicleDetails.name : ""}</h5>
                    <p className="card-text">Model: {vehicleDetails && vehicleDetails.model ? vehicleDetails.model : ""}</p>
                    <p className="card-text">Vehicle_class: {vehicleDetails && vehicleDetails.vehicle_class ? vehicleDetails.vehicle_class : ""}</p>
                    <p className="card-text">Manufacturer: {vehicleDetails && vehicleDetails.manufacturer ? vehicleDetails.manufacturer : ""}</p>
                    <p className="card-text">Length: {vehicleDetails && vehicleDetails.length ? vehicleDetails.length : ""}</p>
                    <p className="card-text">Cost_in_credits: {vehicleDetails && vehicleDetails.cost_in_credits ? vehicleDetails.cost_in_credits : ""}</p>
                    <Link to={`/vehicleDetails/${props.index}`}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>
                    <button className="btn btn-warning mx-2" onClick={() => { handleAddFavorite(props.vehicle.name) }}>
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}