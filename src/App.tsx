import React from "react";
import EventTimeline from "./pages/EventTimeline";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import styles from "./styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <EventTimeline></EventTimeline>
    </ThemeProvider>
  );
};

export default App;
