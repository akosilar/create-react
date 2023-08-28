export default function ListPicker({ values }) {
    const rndIdx = Math.floor(Math.random() * values.length)
    return (
        <div>
            <p>The list of values: {values[rndIdx]}</p>
        </div>
    )
}