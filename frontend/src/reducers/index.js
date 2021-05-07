

const initialState={
    movies:[],
    loading:true,
    error: null
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'MOVIES_LOADED':
            return{
                movies:action.payload,
                loading:false,
                error:null
            }    
        case 'MOVIES_ERROR':
            return{
                movies:[],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer