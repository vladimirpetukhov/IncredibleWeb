const moviesLoaded=(newMovie)=>{
    return{
        type: 'MOVIES_LOADED',
        payload:  newMovie
    }
}

export{
    moviesLoaded
}