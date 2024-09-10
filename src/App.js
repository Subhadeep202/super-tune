import React, { Component } from "react";
import SongsCard from "./components/SongsCard";
import songs from "./services/songs";

class App extends Component {
  state = {
    songs,
  };
  sortByTitle = () => {
    this.setState({
      songs: [
        ...this.state.songs.sort((a, b) =>
          a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
        ),
      ],
    });
  };

  sortBYRating = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)],
    });
  };

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-tittle">SuperTunes - Songs of the week </h2>
        <button className="st-btn" onClick={this.sortByTitle}>
          sort by Title
        </button>
        <button className="st-btn" onClick={this.sortBYRating}>
          sort by Rating
        </button>
        <div id="song-list">
          {this.state.songs.map((song) => (
            <SongsCard key={song.id} data={song} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
