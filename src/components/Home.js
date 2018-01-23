import React, {ReactPropTypes} from 'react';
import { CurrencyFormatter } from "./Formatter";

import logo from './logo.svg';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="Home">
        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <h1>Hi {this.props.name}, Welcome to React Hell...</h1>
                <CurrencyFormatter locale="en" value={11.0} isPrecisionSuperSet={false} Format="mo" />
                <br/>
              <CurrencyFormatter locale="en" value={"11.0"} isPrecisionSuperSet={true} Format="mo" />
              <br />
                <CurrencyFormatter locale="fr" value={11.0} isPrecisionSuperSet={false} Format="mois" />
              <br />
              <CurrencyFormatter locale="fr" value={"11.0"} isPrecisionSuperSet={true} Format="mois" />
              </div>
            </div>
        </div>   
      </div>
    );
  }
}

export default Home;
