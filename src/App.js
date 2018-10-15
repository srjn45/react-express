import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Posts from './components/post/Posts';
import AddPost from './components/post/AddPost';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App-base">
        <Header></Header>
        <Router>
          <div>
            <Route exact path="/" component={Posts} />
            <Route exact path="/addPost" component={AddPost} />
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;