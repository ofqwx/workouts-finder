import { createGlobalStyle } from "styled-components";

const AppStyles = createGlobalStyle`
/* Begin Resets */

html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  font-weight: initial;
  font-family: var(--font-family);
}

/* End Resets */

a {
  color: var(--color-accent);
}

p, h1, h2, h3, h4, h5, h6, pre {
  line-height: 1.5;
  margin: 0;
}

img {
  filter: drop-shadow(0 2px 4px #969696);
}

html {
  background-color: var(--color-background);
  color: var(--color-text-default);
}

:root {
--color-background: #38444c;
--color-border: #697278;
--color-text-default: #f0f2f3;
--color-base: #293238;
--color-accent: #F37520; }

p {
  font-family: var(--font-family-light);
  line-height: 1.7;
  word-spacing: .05em;
}

img {
  filter: drop-shadow(0 2px 4px #0b0b0b);
  max-width: 100vw;
  opacity: .75;
  transition: opacity .5s ease-in-out;
}

img:hover {
  opacity: 1;
}
`;

export default AppStyles;
