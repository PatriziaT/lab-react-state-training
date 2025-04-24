import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => {
        if(counter > 0) setCounter(counter -1);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
            <button onClick={decrement}></button>
            <span>{counter}</span>
            <button onClick={increment}></button>
        </div>
        
    )
}