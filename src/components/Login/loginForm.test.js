import React from 'react';
import LoginForm from './loginForm';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('login', () => {
    it('renders correctly', () => {
        const output = shallow(
            <LoginForm.WrappedComponent />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('should handle wrong form submission', () => {
        const output = shallow(
            <LoginForm.WrappedComponent />
        );
        const event = { preventDefault: () => false };
        expect(output.state().wrong).toEqual(false)
        const link = output.find('input').get(2);
        link.props.onClick(event);
        expect(output.state().wrong).toEqual(true);
    });
    it('should handle correct form submission', () => {
        const output = shallow(
            <LoginForm.WrappedComponent />
        );
        const event = { preventDefault: () => false };
        output.setState({
            email:'alan@gmail.com',
            password:'alan'
        })
        const link = output.find('input').get(2);
        link.props.onClick(event);
        expect(output.state().wrong).toEqual(false);
    });

});