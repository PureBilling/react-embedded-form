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
  state = {
    isFormOpen: false,
  };

  handleOpenForm = () => {
    this.setState(prevState => ({ isFormOpen: prevState.isFormOpen }));
  };

  render() {
    const { isFormOpen } = this.state;

    return (
      <div>
        <button onClick={this.handleOpenForm}>
          Open awesome form below
        </button>
        <LyraForm
          kr-placeholder-pan="Minimal Example Pan"
          kr-placeholder-expiry="Minimal Example Expiry"
          kr-placeholder-security-code="Minimal Example Security Code"
          kr-hide-debug-toolbar="true"
          kr-clear-on-error="false"
          isVisible={isFormOpen}
        />
      </div>
    );
  }
}

export default App;
