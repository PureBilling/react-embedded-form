import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import LyraForm from '../components/LyraForm';

configure({ adapter: new Adapter() });

test("If defined as 'false' the form should be hidden", () => {
  const component = shallow(<LyraForm isVisible={false} />);
  expect(component.find('.kr-embedded-wrapper-isVisible').prop('style').opacity).toBe(0);
});

test("If defined as 'true' the form should be visible", () => {
  const component = shallow(<LyraForm isVisible />);
  expect(component.find('.kr-embedded-wrapper-isVisible').prop('style').opacity).toBe(1);
});
