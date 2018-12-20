import React, { PureComponent } from 'react';
import LyraForm from "./components/LyraForm";
import setGlobalOptions from "./tools/setGlobalOptions";

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': "classic",
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-form-token': '013023XhmLSs67YzwRY7ZV2w18CeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjpudWxsLCJjIjp7ImIiOnsidmkiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6IlZJU0EifX19LCJtYyI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiTUFTVEVSQ0FSRCJ9fX0sImFtIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJBTUVYIn19fSwiY2IiOnsiZiI6eyJkZWJpdENyZWRpdCI6eyJ2YWx1ZSI6ImNyZWRpdCJ9fX19fX0b602',
  'kr-placeholder-pan': 'Pan',
  'kr-placeholder-expiry': 'Expiry',
  'kr-placeholder-security-code': 'Security Code',
  'kr-hide-debug-toolbar': 'false',
  'kr-clear-on-error': 'false',
  'kr-post-url-success': '/success',
  'kr-post-url-refused': '/refused',
  'kr-language': 'en-EN',
};
setGlobalOptions(setup);

class App extends PureComponent {
  handleSetOptions = () => {
    window.KR.setFormConfig({
      'kr-placeholder-pan': 'New Pan',
      'kr-placeholder-expiry': 'New Expiry',
      'kr-placeholder-security-code': 'New Security Code',
      'kr-hide-debug-toolbar': 'true',
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSetOptions}>
          Set runtime options
        </button>
        <LyraForm
          // kr-form-token="013023XhmLSs67YzwRY7ZV2w18CeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjpudWxsLCJjIjp7ImIiOnsidmkiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6IlZJU0EifX19LCJtYyI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiTUFTVEVSQ0FSRCJ9fX0sImFtIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJBTUVYIn19fSwiY2IiOnsiZiI6eyJkZWJpdENyZWRpdCI6eyJ2YWx1ZSI6ImNyZWRpdCJ9fX19fX0b602"
          // kr-language="en-EN"
          // kr-placeholder-pan="Pan"
          // kr-placeholder-expiry="Expiry"
          // kr-placeholder-security-code="Security Code"
          // kr-hide-debug-toolbar="false"
          // kr-clear-on-error="false"
          // kr-post-url-success="/success"
          // kr-post-url-refused="/refused"
        />
      </div>
    );
  }
}

export default App;
