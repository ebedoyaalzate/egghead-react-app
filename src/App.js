import React, {Component} from 'react';
import Widget from './Widget';
class App extends Component {
  state = {
    txt: 'this is the state text'
  }

  update = (e) => {
    this.setState({txt: e.target.value})
  }

  render() {
    return(
      <React.Fragment>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update}/>
        <Widget update={this.update}/>
      </React.Fragment>
    )
  }
}

export default App;
