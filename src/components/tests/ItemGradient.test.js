import React from 'react';
import ItemGradient from "../js/ItemGradient"

import Enzyme, { shallow, mount } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const setUp = (props) => shallow(<ItemGradient {...props} />)

describe('Item gradient js', () => {
    let component
    let instance
    beforeEach(() => {
        component = setUp()
        instance = component.instance()
    })

    it("shoude correct render", () => {
        const wrapper = shallow(<ItemGradient />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

});

