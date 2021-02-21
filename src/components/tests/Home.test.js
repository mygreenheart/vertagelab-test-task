import React from 'react';
import Home from "../js/Home"

import Enzyme, { shallow, mount, render } from 'enzyme';

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
const gradientData = [{ "id": "adf64f42-c503-4aae-8017-01dc9a29fa64", "colorFrom": "#ffffff", "colorTo": "#000000" },
{ "id": "4b4b40e3-d253-4e07-9f76-09a7fce192b4", "colorFrom": "#aaaaaa", "colorTo": "#cccccc" },
{ "id": "ab451464-f3e6-44dd-9251-63469043c6c6", "colorFrom": "#abcabc", "colorTo": "#333333" }]
describe('Home js', () => {
    it("shoude correct render", () => {
        const wrapper = shallow(<Home />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })



});

