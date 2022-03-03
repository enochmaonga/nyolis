import React from 'react';
import '../Styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';
import footer from '../Styles/Footer.css'
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid">
      <Header />
      <AboutUs />
      <Footer />
    </div>
     </React.Fragment>
    
  )
}

export default App;
