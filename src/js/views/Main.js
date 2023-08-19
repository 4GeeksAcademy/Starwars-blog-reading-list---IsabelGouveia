import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/vehicles";
import { People } from "../component/people";

export const Main = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomeDataPlanets();
        actions.loadSomeDataVehicles();
        actions.loadSomeDataPeople();
    }, []);

    return (
        <div className="container">
            <div>
                <h1 className="text-danger mb-4">Characters</h1>
                <div className="overflow-x-auto row flex-nowrap" style={{ overflowX: "scroll" }}>
                    {store.people?.map((person, index) => (
                        <People person={person} index={person.uid} key={index} />
                    ))}
                </div>
                <h1 className="text-danger mb-4">Planets</h1>
                <div className="overflow-x-auto row flex-nowrap" style={{ overflowX: "scroll" }}>
                    {store.planets?.map((planet, index) => (
                        <Planets planet={planet} index={planet.uid} key={index} />
                    ))}
                </div>
                <h1 className="text-danger mb-4">Vehicles</h1>
                <div className="overflow-x-auto row flex-nowrap" style={{ overflowX: "scroll" }}>
                    {store.vehicles?.map((vehicle, index) => (
                        <Vehicles vehicle={vehicle} index={vehicle.uid} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
