import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component{
  render(){
    return(
      <div className="pageFix">
          <div className="allWrapping">
            <Header />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;