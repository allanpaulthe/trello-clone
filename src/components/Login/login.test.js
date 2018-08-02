import React from 'react';
import ReactDom from 'react-dom';
import Login from './login';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('login', () => {
    it('renders correctly', () => {
        const output = shallow(
            <Login />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('should handle the click event to display form', () => {
        const output = shallow(
            <Login />
        );
        expect(output.state().emailAndPass).toEqual(false)
        const link=output.find('p').get(0);
        link.props.onClick();
        expect(output.state().emailAndPass).toEqual(true);
    });

});