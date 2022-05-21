import GlobalStyle from "./styles/GlobalStyles";
import { HelmetElement } from "./common-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { WelcomePage } from "./pages/index.js";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetElement title={'My training app'}/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
