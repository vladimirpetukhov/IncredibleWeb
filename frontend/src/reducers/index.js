const initialState={
    movies:[{
        id:1,
        name:'Production-Ready',
        author:'John'
    },
    {
       id:2,
       name:'Release-IT',
       author:'Michael T. N'
   }]
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