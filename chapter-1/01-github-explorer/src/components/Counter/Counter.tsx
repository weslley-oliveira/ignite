import { useState } from "react"

import './styles.scss'

export function Counter() {
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    return (
        <div className="counter">
            <p>{counter}</p>
        </div>
    )
    
}