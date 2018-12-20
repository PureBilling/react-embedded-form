import React, { Component } from 'react';
import setupOptions from './lyra-form/tools/setupOptions';
import LyraForm from './lyra-form/LyraForm';

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': "classic",
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-form-token': '013023XhmLSs67YzwRY7ZV2w18CeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjpudWxsLCJjIjp7ImIiOnsidmkiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6IlZJU0EifX19LCJtYyI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiTUFTVEVSQ0FSRCJ9fX0sImFtIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJBTUVYIn19fSwiY2IiOnsiZiI6eyJkZWJpdENyZWRpdCI6eyJ2YWx1ZSI6ImNyZWRpdCJ9fX19fX0b602',
  'kr-post-url-success': '/success',
  'kr-post-url-refused': '/refused',
  'kr-language': 'en-EN',
};
setupOptions(setup);

class App extends Component {
  render() {
    return (
      <LyraForm
        kr-placeholder-pan="Minimal Example Pan"
        kr-placeholder-expiry="Minimal Example Expiry"
        kr-placeholder-security-code="Minimal Example Security Code"
        kr-hide-debug-toolbar="false"
        kr-clear-on-error="false"
      />
    );
  }
}

export default App;
