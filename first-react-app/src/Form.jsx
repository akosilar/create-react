function handleFormSubmit(e) {
    console.log('submitted the form')
    e.preventDefault()
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit} action="">
            <button>Submit</button>
        </form>
    )
}