import React from "react";
import PurchaseTimeline from "./pages/PurchaseTimeline";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import styles from "./styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <PurchaseTimeline />
    </ThemeProvider>
  );
};

export default App;
