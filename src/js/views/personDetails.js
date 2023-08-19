import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonDetails = () => {
  const { store, actions} = useContext(Context);
  const { id } = useParams();

  const [person, setPerson] = useState(null);

    useEffect(() => {
        actions.loadSomeDataPerson(id, setPerson);
    }, [id]);


  if (!person) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name: {person.name}</h5>
          <p className="card-text">Birth_year: {person.birth_year}</p>
          <p className="card-text">Eye_color: {person.eye_color}</p>
          <p className="card-text">Gender: {person.gender}</p>
          <p className="card-text">Hair_color: {person.hair_color}</p>
          <p className="card-text">Height: {person.height}</p>
        </div>
      </div>
    </div>
  );
};