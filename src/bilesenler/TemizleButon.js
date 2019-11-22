import React, { Component } from 'react';
import './TemizleButon.css';

class TemizleButon extends Component {

    render() {
        return(
            <div className="temizle-btn"
                onClick={() => this.props.handleClear()}
            >
                {this.props.children}
            </div>
        );
    }
}
export default TemizleButon;
