import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import IWebService from "./services/iweb-service";
import { IWebServiceProvider } from "./components/iweb-service-context";

import store from "./store";

const iwebStoreService = new IWebService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <IWebServiceProvider value={iwebStoreService}>
        <Router>
          <App/>
        </Router>
      </IWebServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

export default App;
