import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import kr from "../service/kr";

class LyraForm extends PureComponent {
  constructor(props) {
    super(props);
    kr.setFormConfig({
      "formToken": (window.PARAMS && window.PARAMS.formToken)
        ? window.PARAMS.formToken
        : "01O0xI6UfrRFKb7J9_G30R_Q18AeyJhIjo5OTAsIm0iOiJFVVIiLCJvIjoiZGVtby01YmM4NjhmYzQ0MDAyIiwiYyI6eyJiIjp7InZpIjp7ImYiOnsidmFkQ2FyZFR5cGUiOnsidmFsdWUiOiJWSVNBIn19fSwibWMiOnsiZiI6eyJ2YWRDYXJkVHlwZSI6eyJ2YWx1ZSI6Ik1BU1RFUkNBUkQifX19LCJhbSI6eyJmIjp7InZhZENhcmRUeXBlIjp7InZhbHVlIjoiQU1FWCJ9fX0sImNiIjp7ImYiOnsiZGViaXRDcmVkaXQiOnsidmFsdWUiOiJjcmVkaXQifX19fX196102",
    });

    this.state = {
      isVisible: true,
      dynamicKrPostUrlRefused: null,
      dynamicKrPostUrlSuccess: null,
    }
  };

  componentDidMount() {
    const { 'kr-form-token': krFormToken } = this.props;

    // Inheritate from global
    let globalConfiguration = kr.getGlobalConfiguration();
    Object.keys(globalConfiguration).forEach(key => {
      let camelCaseKey = kr.normalize('kebabCase', 'camelCase', key);
      let dataKey = `dynamic${camelCaseKey}`;
      if (!this.state[dataKey]) {
        this.setState({
          [dataKey]: globalConfiguration[key],
        });
      }
    });

    if (krFormToken) this.setupForm();
  };

  componentDidUpdate(prevProps) {
    if (prevProps['kr-form-token'] !== this.props['kr-form-token']) this.setupForm();
  }

  setupForm = () => {
    if (window.hasOwnProperty('KR')) {
      window.KR.onFormReady(() => {
        this.setConfig();
      });
    } else {
      // Wait until the library is loaded
      const checkInterval = setInterval(() => {
        if (window.hasOwnProperty('KR')) {
          this.setupForm();
          clearInterval(checkInterval);
        }
      }, 50);
    }
  };

  setConfig = () => {
    const {
      'kr-form-token': formToken,
      'kr-language': language,
      'kr-placeholder-pan': placeholderPan,
      'kr-placeholder-expiry': placeholderExpiry,
      'kr-placeholder-security-code': placeholderSecurityCode,
      'kr-hide-debug-toolbar': hideToolbar,
      'kr-clear-on-error': clearOnError,
      'kr-post-url-success': postSuccess,
      'kr-post-url-refused': postRefused,
    } = this.props;

    let formConfig = {
      'formToken': formToken,
    };

    const krPublicKey = window['kr-public-key'];

    if (krPublicKey) formConfig['publicKey'] = krPublicKey;
    if (language) formConfig['language'] = language;
    if (placeholderPan) formConfig['placeholderPan'] = placeholderPan;
    if (placeholderExpiry) formConfig['placeholderExpiry'] = placeholderExpiry;
    if (placeholderSecurityCode) formConfig['placeholderSecurityCode'] = placeholderSecurityCode;
    if (hideToolbar) formConfig['hideDebugToolbar'] = hideToolbar;
    if (clearOnError) formConfig['clearOnError'] = clearOnError;
    if (postSuccess) formConfig['postUrlSuccess'] = postSuccess;
    if (postRefused) formConfig['postUrlRefused'] = postRefused;

    // Wait until everything is loaded
    let loadCheckInterval = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(loadCheckInterval);
        kr.setFormConfig(formConfig);
      }
    }, 25);
  };

  render() {
    const { isVisible: isVisibleProps } = this.props;
    const { isVisible: isVisibleState } = this.state;
    const isVisible = isVisibleProps !== undefined && typeof isVisibleProps === 'boolean'
      ? isVisibleProps : isVisibleState;

    return (
      <div style={{ opacity: isVisible ? 1 : 0 }}>
        <div className="kr-embedded">
          <div className="kr-pan"/>
          <div className="kr-expiry"/>
          <div className="kr-security-code"/>
          <button className="kr-payment-button"/>
          <div className="kr-form-error"/>
        </div>
      </div>
    );
  }
}

LyraForm.propTypes = {};

export default LyraForm;