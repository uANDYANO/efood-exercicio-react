import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles";

import Router from "./routes";
import Footer from "./components/Footer";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
