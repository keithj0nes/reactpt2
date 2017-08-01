import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';


export default class Featured extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      isFetching: true
    };
  }

  isFetchingFunc(){
    if(this.state.isFetching){
      return <img src={logo} className="App-logo-p2" alt="logo" />
    } else {
      return;
    }
  }

  componentDidMount() {

    axios.get('https://swapi.co/api/people/').then((res) => {

      const adrian = res.data.results.map((obj) => {
        console.log(obj, "obj.data");
        return obj})
      this.setState({posts: adrian, isFetching: false});

    })
  }

  render() {
    return (
      <div>
        <h2>Featured</h2>
          {this.isFetchingFunc()}
        <ul>
          {this.state.posts.map((person, index) => {
            return <li key={index}>{person.name}</li>
          })}
        </ul>
      </div>
    );
  }
}
