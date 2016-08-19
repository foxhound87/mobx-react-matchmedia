import jsonStringifySafe from 'json-stringify-safe';
import React, { Component } from 'react';
import { toJS, isObservable, observable, action } from 'mobx';
import { matchMedia, setMatchMediaConfig } from './matchMedia';

export default class MatchMediaProvider extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    breakpoints: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.breakpoints = isObservable(this.props.breakpoints)
      ? this.props.breakpoints
      : observable(this.props.breakpoints);

    this.templates = JSON.parse(jsonStringifySafe(toJS(this.breakpoints, true)));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); // eslint-disable-line
    this.matchBreakpoint(); // set initials values
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // eslint-disable-line
  }

  handleResize = (e) => {
    e.preventDefault();
    this.matchBreakpoint();
  };

  matchBreakpoint = () => {
    setMatchMediaConfig();
    for (const [val, key] of Object.entries(this.templates)) {
      this.updateBreakpoints(key, val);
    }
  };

  updateBreakpoints = action((val, key) => {
    const match = matchMedia(val).matches;
    this.breakpoints[key] = match;
  });

  render() {
    return (
      <div>
        {this.props && this.props.children}
      </div>
    );
  }
}
