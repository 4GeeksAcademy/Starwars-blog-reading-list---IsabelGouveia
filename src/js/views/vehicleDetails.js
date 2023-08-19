import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const vehicleDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        actions.loadSomeDataVehicle(id, setVehicle);
    }, [id]);

  if (!vehicle) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name: {vehicle.name}</h5>
          <p className="card-text">Model: {vehicle.model}</p>
          <p className="card-text">Vehicle_class: {vehicle.vehicle_class}</p>
          <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
          <p className="card-text">Length: {vehicle.length}</p>
          <p className="card-text">Cost_in_credits: {vehicle.cost_in_credits}</p>
        </div>
      </div>
    </div>
  );
};