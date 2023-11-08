import { useState } from "react"

export default function Counter() {
    //useState only runs once on the very first time the function is ran. It will set num to 5 again.
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