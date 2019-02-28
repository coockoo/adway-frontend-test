import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
);

/*
 .d8888b.           888                                d8b 888
d88P  Y88b          888                                Y8P 888
Y88b.               888                                    888
 "Y888b.   888  888 88888b.  .d8888b   .d8888b 888d888 888 88888b.   .d88b.
    "Y88b. 888  888 888 "88b 88K      d88P"    888P"   888 888 "88b d8P  Y8b
      "888 888  888 888  888 "Y8888b. 888      888     888 888  888 88888888
Y88b  d88P Y88b 888 888 d88P      X88 Y88b.    888     888 888 d88P Y8b.
 "Y8888P"   "Y88888 88888P"   88888P'  "Y8888P 888     888 88888P"   "Y8888

                          888
                          888
                          888
                          888888 .d88b.
                          888   d88""88b
                          888   888  888
                          Y88b. Y88..88P
                           "Y888 "Y88P"

8888888b.                        8888888b.  d8b          8888888b.  d8b
888   Y88b                       888  "Y88b Y8P          888   Y88b Y8P
888    888                       888    888              888    888
888   d88P .d88b.  888  888  888 888    888 888  .d88b.  888   d88P 888  .d88b.
8888888P" d8P  Y8b 888  888  888 888    888 888 d8P  Y8b 8888888P"  888 d8P  Y8b
888       88888888 888  888  888 888    888 888 88888888 888        888 88888888
888       Y8b.     Y88b 888 d88P 888  .d88P 888 Y8b.     888        888 Y8b.
888        "Y8888   "Y8888888P"  8888888P"  888  "Y8888  888        888  "Y8888
*/
