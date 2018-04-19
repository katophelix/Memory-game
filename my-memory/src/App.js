import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Container from "./components/Container";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
// import CounterApp from "./components/Counter";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    idsClicked: [],
    imageClick: false,
    // totalScore: 0
  };


  handleImageID = (friendID) => {

    if (this.state.idsClicked.includes(friendID)) {
      let tempScore = this.state.topScore
     if (this.state.score > this.state.topScore){
       tempScore = this.state.score
     }
     alert("Already Clicked! You Lost.");
      this.setState({ score: 0, idsClicked: [] , topScore: tempScore})
    }
    else {
      let tempArr = this.state.idsClicked.concat();
      tempArr.push(friendID)
      this.setState({
        idsClicked: tempArr,
        score: this.state.score + 1
      });
      this.shuffleCharacters();
    }

    if (this.state.score === 15) {
      alert("You Won!!!!!");

    }
  };




shuffleCharacters = () => {
  let friends = this.state.friends.concat();
  for (let i = friends.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  this.setState({ friends });
};




// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Container>
      <Navbar>
        <h3 className="nav navbar-right">
          Score: {this.state.score} <span> | </span> Top Score: {this.state.topScore}
        </h3>

      </Navbar>
      {/* <CounterApp></CounterApp> */}
      <Header></Header>
      {this.state.friends.map(friend => (
        <FriendCard
          // onClick={this.handleIncrement}

          handleImageID={this.handleImageID}
          id={friend.id}
          key={friend.id}

          image={friend.image}


        />
      ))}
    </Container>
  );
};
};

export default App;
