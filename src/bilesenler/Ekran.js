import React, { Component } from 'react';
import './Ekran.css';

class Ekran extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="ekran">
                {this.props.children}
            </div>
        );
    }
}
export default Ekran;
