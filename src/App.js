import React, { PureComponent } from 'react';
import Provider from "./components/Provider";

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': "classic",
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};

class App extends PureComponent {
  render() {
    return (
      <Provider options={setup}>
        <div>
          Some text
        </div>
      </Provider>
    );
  }
}

export default App;
