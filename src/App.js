import React, { Component } from 'react';
import { createRootNavigator } from './Routes';

class App extends Component {
  render() {
    const AppLayout = createRootNavigator();
    return (
      	<AppLayout />
    );
  }
}

export default App;
