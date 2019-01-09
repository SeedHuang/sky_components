import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
export default class Side extends PureComponent {
  render() {
    return <nav className="sky_side" {...this.props} />
  }
};
