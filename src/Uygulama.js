import React,  { Component } from 'react';
import './Uygulama.css';
import Ekran from './bilesenler/Ekran';
import TemizleButon from './bilesenler/TemizleButon';
class Uygulama extends Component {
  constructor(props){
    super(props);
      ekran: "",
      oncekiSayi: "",
      sonrakiSayi: "",
      islem: ""
    };
  }

  ekranaEkle = deger => {
    this.setState({ ekran: this.state.ekran + deger });
  };

  ekranaSifirEkle = deger => {
    if(this.state.input !== "")
    {
      this.setState({ ekran: this.state.ekran + deger });
    }
  };
  ondalikEkle = deger => {
    if(this.state.ekran.indexOf(".") === -1) {
      this.setState({ ekran: this.state.ekran + deger });
    }
  };

  ekranTemizle = () => {
    this.setState({ ekran: "" })
  };
  
  toplama = () => {
      this.state.oncekiSayi = this.state.ekran;
      this.setState({ ekran: "" });
      this.state.islem = "toplama";
  };

  cikarma = () => {
    this.state.oncekiSayi = this.state.ekran;
    this.setState({ ekran: "" });
    this.state.islem = "cikarma";
  };
  carpma = () => {
    this.state.oncekiSayi = this.state.ekran;
    this.setState({ ekran: "" });
    this.state.islem = "carpma";
  };

  bolme = () => {
    this.state.oncekiSayi = this.state.ekran;
    this.setState({ ekran: "" });
    this.state.islem = "bolme";
  };

  islem = () => {
    this.state.sonrakiSayi = this.state.ekran;

    if(this.state.islem == "toplama") {
      this.setState({
        ekran: parseFloat(this.state.oncekiSayi) + parseFloat(this.state.sonrakiSayi)
      });
    } else if(this.state.islem == "cikarma") {
      this.setState({
        ekran: parseFloat(this.state.oncekiSayi) - parseFloat(this.state.sonrakiSayi)
      });
    } else if(this.state.islem == "carpma") {
      this.setState({
        ekran: parseFloat(this.state.oncekiSayi) * parseFloat(this.state.sonrakiSayi)
      });
    } else if(this.state.islem == "bolme") {
      this.setState({
        ekran: parseFloat(this.state.oncekiSayi) / parseFloat(this.state.sonrakiSayi)
      });
    }

  };

  render() {
      return (
        <div className="App">
          <div className="calc-wrapper">
            <div className="row">
            <Ekran>{this.state.ekran}</Ekran>
            </div>
            <div className="row">
              <Buton handleClick={this.ekranaEkle}>7</Buton>
              <Buton handleClick={this.ekranaEkle}>8</Buton>
              <Buton handleClick={this.ekranaEkle}>9</Buton>
              <Buton handleClick={this.bolme}>/</Buton>
            </div>
            <div className="row">
              <Buton handleClick={this.ekranaEkle}>4</Buton>
              <Buton handleClick={this.ekranaEkle}>5</Buton>
              <Buton handleClick={this.ekranaEkle}>6</Buton>
              <Buton handleClick={this.carpma}>*</Buton>
            </div>
            <div className="row">
              <Buton handleClick={this.ekranaEkle}>1</Buton>
              <Buton handleClick={this.ekranaEkle}>2</Buton>
              <Buton handleClick={this.ekranaEkle}>3</Buton>
              <Buton handleClick={this.toplama}>+</Buton>
            </div>
            <div className="row">
              <Buton handleClick={this.ondalikEkle}>.</Buton>
              <Buton handleClick={this.ekranaSifirEkle}>0</Buton>
              <Buton handleClick={this.islem}>=</Buton>
              <Buton handleClick={this.cikarma}>-</Buton>
            </div>
            <div className="row">
              <TemizleButon handleClear={this.ekranTemizle}>Sil</TemizleButon>
            </div>
          </div>
        </div>
      );
  }
}

export default Uygulama;
