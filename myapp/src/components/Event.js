import React from 'react';

const Event = () => {

    const Show = () => {
        return (
            alert("You have clicked on this button")
        )
    }
    return (
        <div>
            <button onClick={Show} >Click me</button>
        </div>
    );
}

export default Event;
