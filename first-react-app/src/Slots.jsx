export default function Slots({ val1, val2, val3 }) {
    let message;
    if (val1 === val2 && val1 === val3) {
        message = "You win! Congrats!"
    } else {
        message = "You lose!"
    }
    return (
        <div>
            <h1>Slot Machine</h1>
            <span>{val1}</span>{val2}<span>{val3}</span><span></span>
            <p>{message}</p>
        </div>
    )
}