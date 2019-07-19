import React from 'react';
import Header from './Header';
import Recent from './Recent';
import MostUpvoted from './MostUpvoted';
import WatchTags from './WatchTags';

const App = () => (
  <div className="wrapper">
    <Header />
    <Recent />
    <div className="second-section">
      <MostUpvoted />
      <WatchTags />
    </div>
  </div>
)

export default App;
