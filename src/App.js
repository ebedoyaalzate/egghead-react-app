import React, {Component} from 'react';

class App extends Component {
  state = {
    currentEvent: '----'
  }

  update = (e) => {
    this.setState({currentEvent: e.type})
  }
  render() {
    return(
      <React.Fragment>
        <textarea 
          cols="30" 
          rows="10" 
          onKeyPress={this.update}
          onCopy={this.update}
          onPaste={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
        />
        <h1>{this.state.currentEvent}</h1>
      </React.Fragment>
    )
  }
}

export default App;
