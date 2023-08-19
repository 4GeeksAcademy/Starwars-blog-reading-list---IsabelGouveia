import React, { useContext , useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const People = (props) => {
    const { store, actions } = useContext(Context);

    const [personDetails, setPersonDetails] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.tech/api/people/${props.index}`)
            .then(response => response.json())
            .then(data => {
                setPersonDetails(data.result.properties);
            })
            .catch(error => {
                console.error("Error fetching person details");
            });
    }, [props.index]);

    if (!personDetails) {
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
                    <h5 className="card-title">{personDetails && personDetails.name ? personDetails.name : ""}</h5>
                    <p className="card-text">Birth_year: {personDetails && personDetails.birth_year ? personDetails.birth_year : ""}</p>
                    <p className="card-text">Eye_color: {personDetails && personDetails.eye_color ? personDetails.eye_color : ""}</p>
                    <p className="card-text">Gender: {personDetails && personDetails.gender ? personDetails.gender : ""}</p>
                    <p className="card-text">Hair_color: {personDetails && personDetails.hair_color ? personDetails.hair_color : ""}</p>
                    <p className="card-text">Height: {personDetails && personDetails.height ? personDetails.height : ""}</p>
                    <Link to={`/personDetails/${props.index}`}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>
                    <button className="btn btn-warning mx-2" onClick={() => { handleAddFavorite(props.person.name) }}>
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}