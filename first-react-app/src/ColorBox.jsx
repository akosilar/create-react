import { useState } from "react"
import "./ColorBox.css"
export default function ColorBox() {
    const randomColor = ['red', 'blue', 'green', 'orange', 'yellow']
    const [bgColor, setbgColor] = useState(`${randomColor[Math.floor(Math.random() * 5)]}`)
    const styles = {
        backgroundColor: bgColor,
    }

    const changeColor = () => setbgColor(`${randomColor[Math.floor(Math.random() * 5)]}`)

    return (
        <div className="box" style = {styles} onClick={changeColor}></div>
    )
}