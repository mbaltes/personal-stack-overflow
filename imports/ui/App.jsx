import React from 'react';
import Header from './Header';
import Recent from './Recent';
import MostUpvoted from './MostUpvoted';
//import Hello from './Hello.jsx';
//import Info from './Info.jsx';

const App = () => (
  <div className="wrapper">
    <Header />
    <Recent />
    <MostUpvoted />
  </div>
)

// const App = () => (
//   <div>
//     <h1>Welcome to Meteor!</h1>
//     <Hello />
//     <Info />
//   </div>
// );

export default App;
