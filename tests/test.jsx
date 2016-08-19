import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { isObservable } from 'mobx';

import { MatchMediaProvider } from '../src/index';
import breakpoints from './data/breakpoints';

describe('<MatchMediaProvider />', () => {
  // test

  it('check if MatchMediaProvider breakpoints is observable', () => {
    const component = shallow(<MatchMediaProvider breakpoints={breakpoints} />);
    expect(isObservable(component.instance().breakpoints)).to.equal(true);
  });

  it('check if MatchMediaProvider templates is not observable', () => {
    const component = shallow(<MatchMediaProvider breakpoints={breakpoints} />);
    expect(isObservable(component.instance().templates)).to.equal(false);
  });
});
