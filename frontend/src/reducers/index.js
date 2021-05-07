const initialState={
    movies:[]
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'MOVIES_LOADED':
            return{
                movies:action.payload
            }    
        default:
            return state
    }
}

export default reducer