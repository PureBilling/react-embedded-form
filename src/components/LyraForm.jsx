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
  }

  render() {
    const { isVisible: isVisibleProps } = this.props;
    const { isVisible: isVisibleState } = this.state;
    const isVisible = isVisibleProps !== undefined ? isVisibleProps : isVisibleState;

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