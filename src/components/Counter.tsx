import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
