import React from 'react'
import { Component } from 'react';
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends Component{

    state={
        hasError:false
    }

    componentDidCatch(){
        this.setState({hasError:true})
    }

    render(){
        if(this.setState.hasError){
            return <ErrorIndicator/>
        }

        return this.props.children
    }
}