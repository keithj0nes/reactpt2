import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, Link } from "react-router-dom"

import Title from "./Header/Title";
import Featured from "../pages/Featured";

export default class Header extends Component {

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title)
  }
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}  />


        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/archives">Archives</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
