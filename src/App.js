import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reserve from './components/Reserve';
import Order_online from './components/Order_online';
import Menu from './components/Menu';
import Contact from './components/Contact';


class App extends Component{
  render(){
    return(
      <div className="wrapper pageFix">
          <div className="allWrapping">
            <Header />
            <Main />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;