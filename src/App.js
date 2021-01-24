import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black ",
    bold: false,
    italic: false,
    underline: false,
  }
  chooseColor = newColor => {
    this.setState({ color: newColor })
  }
  applyStyle = style => {
    let newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  }
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];
    // chooseColor = newColor => {
    //   this.setState({ color: newColor })
    // }
    let stylingBoxes = styleNames.map(style => {
      return (
        <button className ="button"
          style={styles[style]}
          key={style}
          onClick={() => this.applyStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.chooseColor(color)}
        />
      );
    });

    const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className="App">
      <header className="App-header">
        <h1  > Rich Text Editor Example </h1>
        <div >{stylingBoxes}</div>
        
        
        <textarea className ="text-bar"
         style={{
          color: this.state.color,
          fontWeight: this.state.bold ? "bold" : "",
          fontStyle: this.state.italic ? "italic" : "",
          textDecorationLine: this.state.underline ? "underline" : "",
        }}/> 

        <div >{colorBoxes}</div>
   
        
      </header>
    </div>
  );
}


}
export default App;
