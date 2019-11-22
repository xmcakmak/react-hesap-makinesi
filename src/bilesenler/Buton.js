import React, { Component } from 'react';
import './Buton.css';

class Buton extends Component {
    constructor (props) {
        super(props);
    }
    islemMi = deger => {
        return !isNaN(deger) || deger==="." || deger==="=";
    }
    render() {
        return(
            <div
            className={`buton ${this.islemMi
            (this.props.children) ? "" : "islem"}`}
            onClick={() => this.props.handleClick(this.props.children)}>
               {this.props.children}
            </div>
        );
    }
}
export default Buton;
