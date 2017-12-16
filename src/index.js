const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.fontSizes = ["small", "medium", "large", "extra large"]
    this.state = {
      fontSize: "medium"
    };
  };
  // let app = new App()
  handleChange = e => {
    this.setState({
      fontSize: e.target.value
    });
  };
  render() {
    let OMGFINEWHAT = {};
    if (this.state.fontSize === 'small') {
      OMGFINEWHAT.fontSize = '8px';
    }
    if (this.state.fontSize === 'medium') {
      OMGFINEWHAT.fontSize = '14px';
    }
    if (this.state.fontSize === 'large') {
      OMGFINEWHAT.fontSize = '20px';
    }
    return(
      <div>
      {this.fontSizes.map(s => <div>
      <input
      type="radio"
      value={s}
      checked={this.state.fontSize === s}
      onChange={this.handleChange} />{s}</div>)}
      <pre style={OMGFINEWHAT}> {`
    You are old, Father William (Carroll)
    “You are old, father William,” the young man said,
    “And your hair has become very white;
    And yet you incessantly stand on your head–
    Do you think, at your age, it is right?”

    “In my youth,” father William replied to his son,
    “I feared it might injure the brain;
    But now that I’m perfectly sure I have none,
    Why, I do it again and again.” 
  `} </pre>
      </div>
      
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));