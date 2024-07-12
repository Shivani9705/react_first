import React, { useState } from 'react';

const UseState = () => {

    const [color, setColor] = useState("Red")

    const [count, setCount] = useState(0)



    return (
        <div>
            <h1>My favorite color is {color}</h1>
            <h1>{count}</h1>
            <button onClick={() => setColor("blue")}>Click me</button>
            <button onClick={() => setCount(count + 1)}>increase me</button>
            <button onClick={() => setCount(count - 1)}>decrease me</button>
        </div>
    );
}

export default UseState;
