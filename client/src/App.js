import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCard'
import Nav from './components/Nav';

import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      players: []
    };
  }

componentDidMount(){
axios
.get('http://localhost:5000/api/footballers')
.then(res=> {
  console.log('footballers', res.data);
  this.setState({players: res.data})
})
.catch(err => {
  console.log("Error", err)
})

}
  render(){
    return (
    <div className="container">
      <Nav />
      {this.state.players.map(player => (
     <PlayerCard 
     key={player.id} 
    //  player={player}
     name={player.name} 
     rank={player.rank} 
     team={player.team}
    />
      ))

      };
    
      
    </div>
  );
}
}
export default App;
