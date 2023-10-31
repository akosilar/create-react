import Property from "./Property"
function PropertyList ({ properties  }) {
    const styles = {
        display: "flex"
    }
    return (
        
            
        <div style={styles}>{properties.map(property => (
            <Property key={property.id} name={property.name} rating={property.rating} price={property.price} />
        ))}</div>

        
    )

}

export default PropertyList