import React, { Component } from 'react';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {

  constructor(){
    super();
    this.state = {title: "Welcome"};
  }

  changeTitle(title){
    this.setState({title: title});
  }

  render() {
    // setTimeout(()=>{
    //   this.setState({name: "Adrian"})
    // },2000)

    return (
      <div className="App">
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
        <Main />

      </div>
    );
  }
}

export default App;

        // <Main />
        //
        // <Footer />
