import React from 'react';
import '../Styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid">
      <Header />
      <AboutUs />
    </div>
     </React.Fragment>
    
  )
}

export default App;
