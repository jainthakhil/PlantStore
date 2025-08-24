import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants }) => {
    if (!plants.length) return <p className="text-center text-gray-600 border-1">No plants found.</p>;

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        //     {plants.map((plant) => (
        //         <PlantCard key={plant._id} plant={plant} />
        //     ))}
        // </div>
        <div className=" w-full grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 justify-items-center">
            {plants.map((plant) => (
                <PlantCard key={plant._id} plant={plant} />
            ))}
        </div>

    );
};

export default PlantList;
