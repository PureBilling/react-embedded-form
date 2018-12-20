import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setupOptions from '../tools/setGlobalOptions';
import LyraForm from '../components/LyraForm';

configure({ adapter: new Adapter() });

const setup = {
  'kr-client-domain': 'https://krypton.purebilling.io',
  'kr-public-key': '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  'kr-language': 'es-ES',
};
setupOptions(setup);

const component = shallow(
  <LyraForm
    kr-language="pt-PT"
    kr-post-url-success="/all-ok"
    kr-post-url-refused="/all-not-ok"
    kr-clear-on-error="false"
    kr-hide-debug-toolbar="true"
    kr-placeholder-expiry="My Expiry!"
    kr-placeholder-pan="My Pan!"
    kr-placeholder-security-code="My CVV!"
  />,
);

const props = component.instance().props;

test('template language', () => {
  if (component) expect(props['kr-language']).toBe('pt-PT');
});

test('template url success', () => {
  if (component) expect(props['kr-post-url-success']).toBe('/all-ok');
});

test('template url refused', () => {
  if (component) expect(props['kr-post-url-refused']).toBe('/all-not-ok');
});

test('template clear on error', () => {
  if (component) expect(props['kr-clear-on-error']).toBe('false');
});

test('template debug tollbar', () => {
  if (component) expect(props['kr-hide-debug-toolbar']).toBe('true');
});

test('template expiry', () => {
  if (component) expect(props['kr-placeholder-expiry']).toBe('My Expiry!');
});

test('template pan', () => {
  if (component) expect(props['kr-placeholder-pan']).toBe('My Pan!');
});

test('template security code', () => {
  if (component) expect(props['kr-placeholder-security-code']).toBe('My CVV!');
});
