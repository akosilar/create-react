function handleClick() {
    console.log('clicked the button')
}

function handleHover() {
    console.log('hovered over')
}

function popUp() {
    alert('Clicked!')
}

export default function Clicker({message,buttonText}) {
    return (
        <div>
            <p onMouseOver={handleHover}>click the button</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={()=>alert(message)}>{buttonText}</button>
        </div>
    )
}