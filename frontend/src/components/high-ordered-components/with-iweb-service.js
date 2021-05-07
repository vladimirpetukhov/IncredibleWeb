import React from "react"
import {IWebServiceConsumer} from "../iweb-service-context"

const withIwebService = () => (Wrapped) => {
  return (props) => (
    <IWebServiceConsumer>
      {(iwebService) => {
        return <Wrapped {...props} iwebService={iwebService} />
      }}
    </IWebServiceConsumer>
  )
}

export default withIwebService