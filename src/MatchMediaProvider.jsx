import React, { Component } from 'react';
import { toJS, extendObservable, action, runInAction } from 'mobx';
import { matchMedia, setMatchMediaConfig } from './matchMedia';

export default class MatchMediaProvider extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    breakpoints: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.breakpoints = this.props.breakpoints;
    this.templates = toJS(this.breakpoints);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); // eslint-disable-line
    this.matchBreakpoints(); // set initials values
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // eslint-disable-line
  }

  handleResize = (e) => {
    e.preventDefault();
    this.matchBreakpoints();
  };

  matchBreakpoints = () => {
    runInAction('match breakpoints', () => {
      setMatchMediaConfig();
      Object.keys(this.templates)
        .forEach(key => this.updateBreakpoints(key, this.templates[key]));
    });
  };

  updateBreakpoints = action('update breakpoints', (key, val) => {
    const match = matchMedia(val).matches;
    extendObservable(this.breakpoints, { [key]: match });
  });

  render() {
    return (
      <div>
        {this.props && this.props.children}
      </div>
    );
  }
}
