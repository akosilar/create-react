function Property ({name, rating, price}) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{rating} stars</h3>
            <h4>${price}</h4>
        </div>
    )
}

export default Property