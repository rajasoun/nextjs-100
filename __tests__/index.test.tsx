import React from 'react';
import { shallow } from 'enzyme';
import Index from '../pages/index';

describe("Test case for index.js", () => {
    test.concurrent("check Next.js 100 is exists", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('div').text()).toEqual('Next.js 100');
    })
    test.concurrent("check TDD is existing as Header", () =>{
        const wrapper = shallow(<Index />);
        expect(wrapper.find('title').text()).toEqual('Next.js 100');
    })
})