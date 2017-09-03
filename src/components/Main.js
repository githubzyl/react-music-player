require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import Root from './Root';

class AppComponent extends React.Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
