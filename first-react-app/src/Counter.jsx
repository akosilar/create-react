import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(5)
    console.log(`num: ${num}`);
    const changeNum = () => {
        setNum(num+1)
    }
    return (
        <div>
            <p>the count is: {num}</p>
            <button onClick={changeNum}>increment</button>
        </div>
    )
}