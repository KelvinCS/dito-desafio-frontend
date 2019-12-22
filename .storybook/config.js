import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";
import styles from "../src/styles";
import GlobalStyles from "../src/styles/global";

// automatically import all files ending in *.stories.js

addDecorator(story => (
  <ThemeProvider theme={styles}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));

configure(
  require.context("../src/components", true, /\.stories\.tsx$/),
  module
);
