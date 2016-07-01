jest.unmock('../App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../App';

describe('App', () => {
  it('renders Hello, World!', () => {
    const wrapper = TestUtils.renderIntoDocument(<div><App /></div>);
    const appNode = ReactDOM.findDOMNode(wrapper).children[0];

    expect(appNode.textContent).toEqual('Hello, World!');
  });
});
