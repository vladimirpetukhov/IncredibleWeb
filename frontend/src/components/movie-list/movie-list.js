import React,{ Fragment} from 'react'
import { Component } from 'react'
import MovieListItem from '../movie-list-item' 
import { connect} from 'react-redux'

import './movie-list.css'

class MovieList extends Component{
    render(){
        const { movies}=this.props
        return(
            <ul>
                {
                    movies.map((movie)=>{
                        return(
                            <li key={movie.id}><MovieListItem movie={movie}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps=({movies})=>{
    return{
        movies
    }
}

export default connect(mapStateToProps)(MovieList)