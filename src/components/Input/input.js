import { useState, useEffect } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>
        </div>
    )
}

