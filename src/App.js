import { AuthProvider } from "./context/AuthContext";
import GlobalStyle from "./styles/GlobalStyles";
import { HelmetElement } from "./common-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { WelcomePage, LoginSection, RegisterSection, ProtectedSection } from "./pages/index.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetElement title={"My training app"} />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LoginSection />} />
              <Route path="/register" element={<RegisterSection />} />
              <Route path="/protected/:id" element={<ProtectedSection />} />
            </Routes>
          </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
