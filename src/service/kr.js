let accumulatedCallbacks = {};
let accumulator = (name, args) => {
  if (!accumulatedCallbacks.hasOwnProperty(name)) accumulatedCallbacks[name] = [];
  switch (name) {
    case "setFormConfig":
      if (typeof window.KR_CONFIGURATION === "undefined") window.KR_CONFIGURATION = {};
      let confKeys = Object.keys(args);
      confKeys.forEach(key => {
        window.KR_CONFIGURATION[key] = args[key];
      });
      break;
    case "setFormToken":
      break;
    default:
      accumulatedCallbacks[name].push([name, args]);
      break;
  }
};

let accumulatorCallAll = newAccumulator => {
  let accKeys = Object.keys(accumulatedCallbacks);
  accKeys.forEach(key => {
    let items = accumulatedCallbacks[key];
    items.forEach(item => {
      newAccumulator(...item);
    });
  });
};

let globalConfiguration = {};

export default {
  setFormConfig(configuration) {
    accumulator('setFormConfig', configuration);
  },
  setFormToken(token) {
    accumulator('setFormToken', token);
  },
  triggerReady() {
    accumulator = (name, args) => {
      return window.KR[name](args);
    };

    // Call previous calls and close the accumulator
    accumulatorCallAll(accumulator);
  },
  reportGlobalConfiguration(conf) {
    let confKeys = Object.keys(conf);
    confKeys.forEach(key => {
      globalConfiguration[key] = conf[key];
    });
  },
  getGlobalConfiguration() {
    return globalConfiguration;
  },
  normalize(from, to, value = "") {
    if (from.toLowerCase() === "kebabcase") {
      if (to.toLowerCase() === "pascalcase") {
        return value.replace(/(\-\w)/g, function (m) {return m[1].toUpperCase();});
      } else if (to.toLowerCase() === "camelcase") {
        let camelValue = value.replace(/(\-\w)/g, function (m) {return m[1].toUpperCase();});
        return camelValue.charAt(0).toUpperCase() + camelValue.slice(1);
      }
    }

    return value;
  }
};