import React from 'react';
import './App.css';

const styles = {
  display: "flex",
  flexDirection: "row",
  width: "300px",
  textAlign: "left",
  marginBottom: "30px",
  padding: "20px",
  input: {
    backgroundColor: "white",
    color: "red",
    width: "200px",
    height: "30px",
    border: "1px solid red",
    margin: "10px 0px 10px 0px",
    padding: "20px",
    boxSizing: "border-box"
  },
  select: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    color: "red",
    border: "1px solid red",
    width: "150px",
    height: "30px",
    marginBottom: "20px",
  },
  button: {
      backgroundColor: "red",
      color: "white",
      border: "0px",
      width: "100px",
      height: "30px",
      marginBottom: "20px"
    }
  }

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: "",
        value2: "",
        result: ""
      };
    }

handlevalue1 = (event) => {
  this.setState({
    value1: event.target.value
  })
}

handlevalue2 = (event) => {
  this.setState({
    value2: event.target.value
  })
}

handleSubmit = (event) => {
  this.setState({ result: parseInt(this.state.value1) + parseInt(((this.state.value1 * this.state.value2) / 100)) });
  event.preventDefault();
}

render() {
  return (
    <div style={styles}>
      <form onSubmit={this.handleSubmit}>
        <strong> Przeliczanie rachunku w restauracji</strong>
        <input name="inputValue" value={this.state.value1} style={styles.input} type="number" placeholder="0" onChange={this.handlevalue1}></input>
        <select name="selectValue" value={this.state.value2} style={styles.select} size="1" onChange={this.handlevalue2} >
          <option value="0">Wysokość napiwku</option>
          <option value="5">5% napiwku</option>
          <option value="10">10% napiwku</option>
          <option value="15">15% napiwku</option>
          <option value="20">20% napiwku</option>
        </select>
        <button style={styles.button} type="submit">Przelicz</button>
        <div> Wysokość rachunku z napiwkiem:  {this.state.result}</div>
        <div> Wysokość rachunku z VAT :  {this.state.result}</div>
      </form>
    </div>
  );
}
}

export default Form;
