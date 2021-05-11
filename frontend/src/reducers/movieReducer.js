import {FETCH_POPULAR, FETCH_UPCOMING,FETCH_MOVIE, FETCH_TOP_RATED, FETCH_KIDS_POPULAR, FETCH_NOW_PLAYING, FETCH_SEARCH} from '../actions/types'

const initialState = {
    searchedMovies:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_UPCOMING:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_TOP_RATED:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_KIDS_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_NOW_PLAYING:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_MOVIE:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_SEARCH:
        return{
            ...state,
            searchedMovies:action.payload,
          
        };
        
        default:
        return state;
    }
}