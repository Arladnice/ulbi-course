import { useState } from 'react';
import classes from './Counter.modules.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={classes.counter}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
