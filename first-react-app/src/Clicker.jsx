function handleClick() {
    console.log('clicked the button')
}

export default function Clicker() {
    return (
        <div>
            <p>click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}