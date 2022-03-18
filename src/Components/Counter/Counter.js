import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(1)

    const increaseBtn = () =>{
        let newCount = count + 1
        setCount(newCount)
    }

    const dicreaseBtn = () =>{
        if(count > 0){
            let newCount = count - 1
            setCount(newCount)
        }
    }
    return (
        <div className='Counter'>
           <h1>{count}</h1> 
           <button onClick={increaseBtn} className='countBtn1'>Increase</button>
           <button onClick={dicreaseBtn} className='countBtn2'>Dicrease</button>
        </div>
    );
};

export default Counter;