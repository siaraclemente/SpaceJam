import React, { Component } from 'react';
import PhotoList from './PhotoList';
import firebase from './firebaseConfig';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
 }  

  componentDidMount() {
    console.log(firebase.database())
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2019-03-30&end_date=2019-04-11")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ photos: data })    
    })
  }
 
 render() {
    return (
      <div className="App">
        <h1>SpaceJam</h1>
        <PhotoList photos={this.state.photos} />
  
      </div>
    );
  }
}

export default App;
