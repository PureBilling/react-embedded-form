import themeTools from "./theme";
import whenDefined from "./whenDefined";
import kr from "../service/kr";

export default function (setup) {
  if (typeof window.KR_CLIENT_LOADED === 'undefined') {
    window.KR_CLIENT_LOADED = true;
    themeTools.loader(setup['kr-client-domain'], setup['kr-theme'], () => {
      // Load the script
      let script = document.createElement('script');
      script.type = 'text/javascript';

      let domain = setup["kr-client-domain"];
      window['kr-client-domain'] = domain;
      window['kr-theme'] = setup['kr-theme'];

      if (/^http.+\.js.*$/.test(domain)) {
        script.src = domain;
      } else {
        script.src = `${domain}/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js`;
      }

      let propagationKeys = [
        'kr-clear-on-error',
        'kr-hide-debug-toolbar',
        'kr-form-token',
        'kr-public-key',
        'kr-post-url-success',
        'kr-language',
        'kr-placeholder-expiry',
        'kr-placeholder-pan',
        'kr-placeholder-security-code',
      ];

      let globalConfiguration = {};

      propagationKeys.forEach(propKey => {
        if (setup.hasOwnProperty(propKey)) {
          script.setAttribute(propKey, setup[propKey]);
          globalConfiguration[propKey] = setup[propKey];
        }
      });

      kr.reportGlobalConfiguration(globalConfiguration);

      window.__kr__script = script;
      document.getElementsByTagName('body')[0].appendChild(script);
    });
  }

  whenDefined(window, 'KR', () => {
    whenDefined(window.KR, "onFormReady", () => {
      kr.triggerReady();
    });
  });
}