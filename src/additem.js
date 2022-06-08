import React, { Component } from 'react';
import './additem.css';
import SHOW from './showitem';

class ADD extends Component {

 
    // ADDEMP = () => {
    //      let inputsarray = document.getElementsByTagName("input");
    //      inputsarray = Array.from(inputsarray).map(function (ele) {
    //        return ele.value;
    //      });

    //      let objemp = {
    //        name: inputsarray[0],
    //        age: inputsarray[1],
    //        id: inputsarray[2],
    //     };
    //     this.props.addemp(objemp);
    // }
    render() {
        

        return (
            <table id="customers">
                <tr className="row">
                    <td className="col-3">
                        <input type="text" placeholder="enter name"></input>
                    </td>
                    <td className="col-3">
                        <input type="text" placeholder="enter age"></input>
                    </td>
                    <td className="col-3">
                        <input type="text" placeholder="enter id"></input>
                    </td>
                    <td className="col-3">
                        <button
                            type="button"
                            onClick={()=> this.props.addemp(document.getElementsByTagName("input"))}
                            className="btn btn-secondary add"
                        >
                            add emp
                        </button>
                    </td>
                </tr>
            </table>
        );
    }
}

export default ADD;