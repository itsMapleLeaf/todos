import { injectGlobal } from 'styled-components'

export function applyGlobalStyles() {
  injectGlobal`
    * {
      box-sizing: border-box;
    }

    :root {
      font: 16px Roboto, sans-serif;
    }

    button, input, textarea, select {
      font: inherit;
    }
  `
}
