import { useState } from "react";

export const useCounter = ( initalValue = 10) => {
        
    const [counter, setCounter] = useState(initalValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }
    const reset = () => {
        setCounter(initalValue);
    }

    const decrement = (value = 1 ) => {
        setCounter(counter - value);
    }

        return {
            counter,
            increment,
            reset,
            decrement
        }
};