import React, { Component } from 'react';
import './bootstrap.css'
import Navbar from './components/Navbar';
import Main from './components/Main'
import footer from './components/Footer'
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
