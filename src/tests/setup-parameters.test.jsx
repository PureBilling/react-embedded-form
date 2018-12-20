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
  'kr-placeholder-expiry': 'My Awesome Expiry!',
  'kr-placeholder-pan': 'My Awesome Pan!',
  'kr-placeholder-security-code': 'My Awesome Security Code!',
  'kr-hide-debug-toolbar': 'true',
  'kr-clear-on-error': 'false',
};
setupOptions(setup);

const component = shallow(<LyraForm />);

test('setup parameter expiry must match the parameters', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-placeholder-expiry')).toBe('My Awesome Expiry!');
});

test('setup parameter pan must match the parameters', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-placeholder-pan')).toBe('My Awesome Pan!');
});

test('setup parameter security code must match the parameters', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-placeholder-security-code')).toBe('My Awesome Security Code!');
});

test('setup parameter language must match the parameters', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-language')).toBe('es-ES');
});

test('if setup parameter defined as "true" debug toolbar should be hidden', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-hide-debug-toolbar')).toBe('true');
});

test('setup parameter clear-on-error must match the parameters', () => {
  if (component) expect(window.__kr__script.getAttribute('kr-clear-on-error')).toBe('false');
});
