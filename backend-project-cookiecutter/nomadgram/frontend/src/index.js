import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore";
import I18n from "redux-i18n";
import { translations } from "translations";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18n translations={translations} initialLang="en" fallbackLang="en">
        <App />
      </I18n>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
