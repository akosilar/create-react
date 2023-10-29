function handleClick() {
    console.log('clicked the button')
}

function handleHover() {
    console.log('hovered over')
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}