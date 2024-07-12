import React from "react";

function Show(props) {
    return <h3>My car brand is {props.brand}</h3>
}

const Car = () => {
    const cars = ['ford', 'audi', 'bmw'];
    return (
        <div>
            {cars.map((car) => <Show brand={car} />)}
        </div>
    )
}

export default Car;