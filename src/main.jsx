import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";
import StyledToastContainer from "./components/Toast/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/nanny-services/">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      <StyledToastContainer />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
