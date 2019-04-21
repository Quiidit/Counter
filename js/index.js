class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1 });

  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h2", null, this.state.value),
      React.createElement("button", { onClick: this.handleClick }, "Press ME")));


  }}


class App extends React.Component {
  render() {
    return (
      React.createElement(Counter, null));

  }}
;

ReactDOM.render(
React.createElement(App, null),
document.getElementById("root"));