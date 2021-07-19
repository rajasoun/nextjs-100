import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Index from '../pages/index';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

describe("Test case for index.js", () => {
    test("check Next.js 100 is exists", () => {
        const wrapper = shallow(<Index/>);
        expect(wrapper.find('div').text()).toEqual('Next.js 100');
    })
})