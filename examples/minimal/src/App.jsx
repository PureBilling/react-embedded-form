import React, { PureComponent } from 'react';
import LyraForm from "../../../src/components/LyraForm";
import setupOptions from "../../../src/tools/setupOptions";

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': "classic",
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-form-token': 'SET-YOUR-OWN-TOKEN',
  'kr-post-url-success': '/success',
  'kr-post-url-refused': '/refused',
  'kr-language': 'en-EN',
};
setupOptions(setup);

class App extends PureComponent {
  render() {
    return (
      <div>
        <LyraForm
          kr-placeholder-pan="Minimal Example Pan"
          kr-placeholder-expiry="Minimal Example Expiry"
          kr-placeholder-security-code="Minimal Example Security Code"
          kr-hide-debug-toolbar="true"
          kr-clear-on-error="false"
        />
      </div>
    );
  }
}

export default App;
