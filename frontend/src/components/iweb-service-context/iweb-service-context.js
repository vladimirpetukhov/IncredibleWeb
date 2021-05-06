import React from 'react'

const{
    Provider: IWebServiceProvider,
    Consumer: IWebServiceConsumer
}=React.createContext()

export {
    IWebServiceConsumer,
    IWebServiceProvider
}