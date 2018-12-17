import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import setupTools from "../tools/setup";

class Provider extends PureComponent {
  constructor(props) {
    super(props);
    let setup = { ...props.options };

    if (typeof window.PARAMS !== 'undefined') {
      setup = setupTools.createSetupFromObject(window.PARAMS);
    }

    this.state = { setup };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Provider.propTypes = {
  options: PropTypes.shape({
    'kr-client-domain': PropTypes.string,
    'kr-theme': PropTypes.string,
    'kr-public-key': PropTypes.string,
  }).isRequired,
};

export default Provider;
