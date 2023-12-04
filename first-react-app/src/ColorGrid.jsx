import ColorBox from "./ColorBox"
import "./ColorBox.css"
export default function ColorGrid() {

    const colorBoxes = []
    for (let index = 0; index < 25; index++) {

        colorBoxes.push(<ColorBox key={index}/>)
    }
    return (
        <div className="color-box">
            {colorBoxes}
        </div>

    )
}