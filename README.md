# React Embedded Form

[![Build Status](https://travis-ci.org/PureBilling/react-embedded-form.svg?branch=develop)](https://travis-ci.org/PureBilling/react-embedded-form)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/PureBilling/react-embedded-form/blob/master/LICENSE)

- [Installation](#installation)
    - [Installation with Yarn](#with-yarn)
    - [Installation with NPM](#with-npm)
- [Usage](#usage)
- [Parameters](#parameters)


## Installation

Add the next package to your library:

### With Yarn

```bash
yarn add package-name
```

### With NPM

```bash
npm install --save package-name
```

## Usage

You can add a form to any React application as follows:

```javascript
// Import the library
import { LyraForm, setGlobalOptions } from "package-name"

// define component setup options
const setup = {
    'kr-client-domain': 'https://api.payzen.eu',
    'kr-theme': "classic",
    'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5'
};

setGlobalOptions(setup);
```

Now, you can add the component to your application:

```javascript
<LyraForm
    kr-form-token="YOUR_TOKEN"
    kr-post-url-success="/success"
    kr-post-url-refused="/refused"
    kr-language="en-EN"
    kr-placeholder-pan="Pan"
    kr-placeholder-expiry="Expiry"
    kr-placeholder-security-code="Security Code"
    kr-hide-debug-toolbar="true"
    kr-clear-on-error="false"
/>
```

## Example

Example                              | Description
------------------------------------ | ---------------------------------------------------
[minimal](examples/minimal)          | a minimal example
[pre-loaded](examples/pre_loaded)    | pre-load the payment form to get it as fast as possible

## Parameters

The allowed configuration parameters are:

Parameter                            | Description                                                  | Setup    | Template  | Runtime  |
-------------------------------------|--------------------------------------------------------------|:--------:|:---------:|:--------:|
kr-client-domain                     | Sets the endpoint of the library                             | &#10003; | &#10060;  | &#10060; |
kr-public-key                        | Public key used for the payment                              | &#10003; | &#10060;  | &#10060; |
kr-theme                             | Sets one of two themes                                       | &#10003; | &#10060;  | &#10060; |
kr-form-token                        | Sets form token                                              | &#10003; | &#10003;  | &#10003; |
kr-language                          | Language used on the payment form                            | &#10003; | &#10003;  | &#10003; |
kr-post-url-success                  | The URL to POST on successfull payment                       | &#10003; | &#10003;  | &#10003; |
kr-post-url-refused                  | The URL to POST on failed payment                            | &#10003; | &#10003;  | &#10003; |
kr-clear-on-error                    | Disable the security code cleaning after a failed payment    | &#10003; | &#10003;  | &#10003; |
kr-hide-debug-toolbar                | Disables the toolbar (only visible for test public keys)     | &#10003; | &#10003;  | &#10003; |
kr-placeholder-expiry                | Changes the default placeholder of the expiry field          | &#10003; | &#10003;  | &#10003; |
kr-placeholder-pan                   | Changes the default placeholder of the pan field             | &#10003; | &#10003;  | &#10003; |
kr-placeholder-security-code         | Changes the default placeholder of the security code field   | &#10003; | &#10003;  | &#10003; |

### Setup parameters

All the **Parameters** are configurable on the setup step adding the value on the corresponding key as the next example:

```javascript
// Import the library
import { LyraForm, setGlobalOptions } from "package-name"

// Configure your endpoint of payment
const setup = {
    'kr-client-domain': 'https://api.payzen.eu',
    'kr-post-url-success': '/post-result',
    'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
    'kr-theme': "classic",
    (...)
};
setGlobalOptions(setup);
```

### Template parameters

All the **Parameters** (except **kr-client-domain**, **kr-public-key** and **kr-theme**) enabled for templates are configurable on the template step adding the value on the corresponding property on the LyraForm component as the next example:

```html
<LyraForm
    kr-placeholder-pan="My pan!"
    kr-hide-debug-toolbar="true"
    kr-post-url-success="/my-post"
    ...
/>
```

### Runtime parameters

All the **Parameters** (except **kr-client-domain**, **kr-public-key** and **kr-theme**) enabled for runtime are configurable on the runtime calling the next KR *setFormConfig*
library method:

```javascript
window.KR.setFormConfig({
    "kr-post-url-success": "/my-post",
    "kr-placeholder-expiry": "My expiration date",
});
```

### Themes

The theme property can be configured only on the setup object argument of the
LyraForm plugin. Available themes are:

- classic
- material

If no **theme** is configured, no CSS will be applied to the final form.
