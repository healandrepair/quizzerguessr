function Question({isFirstQ}) {
    return ( isFirstQ ? 
        <div>
            <h2>How many employees work at Datacom?</h2>
        </div>
        :
        <div>
            <h2>What year was Datacom founded?</h2>
        </div>
    )
}

export default Question;