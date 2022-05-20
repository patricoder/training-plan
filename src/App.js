import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { MainSection } from "./pages/index.js";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
