import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { HomePage,MoviesPage} from '../pages'

import './app.css'

const App=()=>{
    return(
        <Switch>
            <Route path="/" component={ HomePage} exact/>
            <Route path="/movies" component={MoviesPage} />
        </Switch>
    )
}

export default App