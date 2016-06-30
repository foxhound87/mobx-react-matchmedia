# MobX React MatchMedia

##### A React HOC with mediaqueries for responsive layout.

[![Travis Build](https://img.shields.io/travis/foxhound87/mobx-react-matchmedia.svg)](https://travis-ci.org/foxhound87/mobx-react-matchmedia)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/foxhound87/mobx-react-matchmedia/master.svg)](https://codecov.io/gh/foxhound87/mobx-react-matchmedia)
[![Package Version](https://img.shields.io/npm/v/mobx-react-matchmedia.svg)]()
[![Downloads](https://img.shields.io/npm/dt/mobx-react-matchmedia.svg)]()
[![npm](https://img.shields.io/npm/v/mobx-react-matchmedia.svg)]()
[![node](https://img.shields.io/node/v/mobx-react-matchmedia.svg)]()
[![GitHub license](https://img.shields.io/github/license/foxhound87/mobx-react-matchmedia.svg)]()


[![NPM](https://nodei.co/npm/mobx-react-matchmedia.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mobx-react-matchmedia/)

---

## Install

```bash
npm i --save mobx-react-matchmedia
```

## Usage

```javascript

// define mobx observable breakpoints

import { observable } from 'mobx';

const breakpoints = observable({
  xs: '(max-width: 767px)',
  su: '(min-width: 768px)',
  sm: '(min-width: 768px) and (max-width: 991px)',
  md: '(min-width: 992px) and (max-width: 1199px)',
  mu: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
});

// pass the breakpoints to the provider

import { MatchMediaProvider } from 'mobx-react-matchmedia';

<MatchMediaProvider breakpoints={breakpoints}>
  <Test breakpoints={breakpoints} />
</MatchMediaProvider>

// pass the breakpoints as props and check a if true/false

import { observer } from 'mobx-react';

const Test = ({ breakpoints }) => (
  <div>
    {breakpoints.sm ? 'YES' : 'NO'}
  </div>
);

AppNav.propTypes = {
  breakpoints: React.PropTypes.object,
};

export default observer(AppNav);

// now resize the browser window to see the changes

```

## TODO:

* Add documentation
* Add changelog
* Add some tests
