import React, { PureComponent } from 'react';
import LyraForm from "./components/LyraForm";
import setupOptions from "./tools/setupOptions";

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': "classic",
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};
setupOptions(setup);

class App extends PureComponent {
  render() {
    return (
      <div>
        <LyraForm
          kr-form-token="01O0xI6UfrRFKb7J9_G30R_Q18AeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjoiZGVtby01YmM4NjhmYzQ0MDAyIiwiYyI6eyJiIjp7InZpIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJWSVNBIn19fSwibWMiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6Ik1BU1RFUkNBUkQifX19LCJhbSI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiQU1FWCJ9fX0sImNiIjp7ImYiOnsiZGViaXRDcmVkaXQiOnsidmFsdWUiOiJjcmVkaXQifX19fX196102"
          kr-language="en-EN"
          kr-placeholder-pan="MY AWESOME PAN"
          kr-placeholder-expiry="MY AWESOME EXPIRY"
          kr-placeholder-security-code="SECURITY CODE"
          kr-hide-debug-toolbar="true"
          kr-clear-on-error={false}
          kr-post-url-success="/success"
          kr-post-url-refused="/refused"
        />
      </div>
    );
  }
}

export default App;
