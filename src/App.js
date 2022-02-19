import React, { Component } from 'react';
import Button from './Button'
import Heart from './Heart'

class App extends Component {
  render() {
    return(
      <Button>I <Heart/> React</Button>
    )
  }
}

export default App;
