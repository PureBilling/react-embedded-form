import React from "react";
import { shallow, configure } from 'enzyme';
import setupOptions from "../tools/setupOptions";
import LyraForm from "../components/LyraForm";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const setup = {
  "kr-client-domain": 'https://krypton.purebilling.io',
  "kr-public-key": '69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5',
  "kr-language": "es-ES",
};
setupOptions(setup);

it("Language can be setted on the setup as non-default language", () => {
  const component = shallow(<LyraForm />);
  if (component) expect(window.__kr__script.getAttribute("kr-language")).toBe("es-ES");
});