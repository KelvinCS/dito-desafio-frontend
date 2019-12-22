import React from "react";
import { render as jestRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import styles from "../styles";

export const render = children =>
  jestRender(<ThemeProvider theme={styles}>{children}</ThemeProvider>);
