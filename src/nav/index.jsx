import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

export default class Nav extends PureComponent {
  render() {
    return <nav className="sky_nav" {...this.props} />
  }
};
