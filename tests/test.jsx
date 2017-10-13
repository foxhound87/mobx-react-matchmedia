import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { shallow } from 'enzyme';
import { isObservable } from 'mobx';
import { MatchMediaProvider } from '../src/index';
import breakpoints from './data/breakpoints';
import './config';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = jsdom.window;


describe('<MatchMediaProvider />', () => {
  // test

  it('check if MatchMediaProvider templates is not observable', () => {
    const component = shallow(<MatchMediaProvider breakpoints={breakpoints} />);
    expect(isObservable(component.instance().templates)).to.equal(false);
  });
});
