import Route from "./components";
import { Provider } from "react-redux";
import store, { customHistory } from "./store";
import { createGlobalStyle } from "styled-components";
import { Router } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
body{
  @font-face {
     font-family: 'Bold';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

@font-face {
     font-family: 'Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

@font-face {
     font-family: 'Thin';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-1Thin.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}


  margin:0;
  padding:0;
}`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router history={customHistory}>
        <Provider store={store}>
          <Route />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
