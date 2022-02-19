import React, {Component} from 'react';
import PropTypes from 'prop-types'

// const App = () => <h1>Hello world</h1>

class App extends Component {
  render() {
    const cat = this.props.cat;
    return (
      <React.Fragment>
        <h1>Hello world</h1>
        <h2>{this.props.txt}</h2>
        <h3>{cat}</h3>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default text"
}

export default App;
