import React, {Component} from 'react';

class App extends Component {
  state = {
    txt: 'this is the state text',
    cat: 0
  }

  update = (e) => {
    this.setState({txt: e.target.value})
  }

  render() {
    return(
      <React.Fragment>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <input type="text" onChange={this.update}></input>
      </React.Fragment>
    )
  }
}

export default App;
