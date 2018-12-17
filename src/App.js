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
  state = {
    isVisible: true,
  };

  openFormHandler = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <button onClick={this.openFormHandler}>
          {!isVisible ? 'Open' : 'Close'} form
        </button>

        <LyraForm
          isVisible={isVisible}
        />
      </div>
    );
  }
}

export default App;
