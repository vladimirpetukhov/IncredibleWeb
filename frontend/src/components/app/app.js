import React from 'react'
import './app.css'
import { withIwebService} from '../high-ordered-components'

const App=({iwebService})=>{
    console.log(iwebService.get())
    return(
        <div>
            App
        </div>
    )
}

export default withIwebService()(App)