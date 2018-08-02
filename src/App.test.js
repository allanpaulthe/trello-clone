import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render correctly', () => {
    const output = shallow(
      <Provider store={store}>
        <App.WrappedComponent />
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

