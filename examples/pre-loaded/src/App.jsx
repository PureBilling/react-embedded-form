import React, { PureComponent } from 'react';

import LyraForm from './lyra-form/LyraForm';
import setGlobalOptions from './lyra-form/tools/setGlobalOptions';

const setup = {
  'kr-client-domain': 'https://api.payzen.eu',
  'kr-theme': 'classic',
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-form-token': '013023XhmLSs67YzwRY7ZV2w18CeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjpudWxsLCJjIjp7ImIiOnsidmkiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6IlZJU0EifX19LCJtYyI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiTUFTVEVSQ0FSRCJ9fX0sImFtIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJBTUVYIn19fSwiY2IiOnsiZiI6eyJkZWJpdENyZWRpdCI6eyJ2YWx1ZSI6ImNyZWRpdCJ9fX19fX0b602',
  'kr-post-url-success': '/success',
  'kr-post-url-refused': '/refused',
  'kr-language': 'en-EN',
};
setGlobalOptions(setup);

class App extends PureComponent {
  state = {
    isFormOpen: false,
  };

  handleOpenForm = () => {
    this.setState(prevState => ({ isFormOpen: !prevState.isFormOpen }));
  };

  render() {
    const { isFormOpen } = this.state;
    const buttonName = isFormOpen ? 'Close' : 'Open';

    return (
      <div>
        <button onClick={this.handleOpenForm}>
          {`${buttonName} form below`}
        </button>
        <LyraForm
          kr-placeholder-pan="Pre-loaded Example Pan"
          kr-placeholder-expiry="Pre-loaded Example Expiry"
          kr-placeholder-security-code="Pre-loaded Example Security Code"
          kr-hide-debug-toolbar="true"
          kr-clear-on-error="false"
          isVisible={isFormOpen}
        />
      </div>
    );
  }
}

export default App;
