const moviesLoaded=(newMovie)=>{
    return{
        type: 'MOVIES_LOADED',
        payload:  newMovie
    }
}

const moviesError=(error)=>{
    return{
        type: 'MOVIES_ERROR',
        payload: error
    }
}

export{
    moviesLoaded,
    moviesError
}