import React, { Fragment} from 'react'
import './movie-list-item.css'

const MovieListItem=({movie})=>{
    const { name, author}=movie
    return(
        <Fragment>
            <span>{name}</span>
            <span>{author}</span>
        </Fragment>
    )
}

export default MovieListItem