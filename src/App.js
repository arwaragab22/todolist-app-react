import  React,{ Component } from "react";
import { render } from '@testing-library/react';
import SHOW from './showitem';
import './App.css';
import ADD from './additem';



class App extends Component {
  state = {
    emp: [
      { name: "arwa", age: 30, id: 1 },
      { name: "ali", age: 50, id: 2 },
      { name: "asmaa", age: 80, id: 3 },
    ]
  };
  delemp = (element) => {
     let ind=this.state.emp.filter(function (ele) {
      return ele.id !== element;
    })
   
    this.setState({ emp: ind });
  };
  addemp=(inputsarray)=> {
    console.log(inputsarray);

    inputsarray = Array.from(inputsarray).map(function (ele) {
      return ele.value;
    });

    let objemp = {
      name: inputsarray[0],
      age: inputsarray[1],
      id: inputsarray[2],
    };
    let arr = this.state.emp;
    arr.push(objemp);
    this.setState({emp:arr})

  }
  render() {
     
    return (
      <div className="App">
        <h1 className="text-primary">todolist</h1>
        <SHOW items={this.state.emp} delemp={this.delemp} />
        <ADD addemp={this.addemp} />
      </div>
    );
  }
}


export default App;
