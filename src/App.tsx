import { GlobalStyle } from "components/atoms";
import ViewportProvider from "contexts/viewport";
import { LandingRouter } from "routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ViewportProvider>
        <LandingRouter />
      </ViewportProvider>
    </div>
  );
}

export default App;
