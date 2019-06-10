import React, {Component} from 'react';
import './reset.css';
import './App.css';
import './responsive.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      menuStatus: 'drop-down-menu',
      buttonStatus: 'drop-down-buttons'
    }
  }

  handleClick=()=>{
    if(this.state.menuStatus === 'drop-down-menu-open'){
      this.setState({menuStatus: 'drop-down-menu-close', buttonStatus: 'drop-down-buttons-close'})
    } else {
      this.setState({menuStatus: 'drop-down-menu-open', buttonStatus: 'drop-down-buttons-open'})
    }
  }

  render(){
    console.log(this.state.menuStatus, this.state.buttonStatus)
    return (
      <main className="App">
        <header>
          <h1>Start Bootstrap</h1>
          <div />
          <h2 className='nav-links'>SERVICES</h2>
          <h2 className='nav-links'>PORTFOLIO</h2>
          <h2 className='nav-links'>ABOUT</h2>
          <h2 className='nav-links'>TEAM</h2>
          <h2 className='nav-links'>CONTACT</h2>
          <button className='menu-button' onClick={this.handleClick}>MENU <img className='ham' src='https://img.icons8.com/carbon-copy/2x/hamburger.png' alt='ham'/></button>
          <section className={this.state.menuStatus}>
            <h2 className={this.state.buttonStatus}>SERVICES</h2>
            <h2 className={this.state.buttonStatus}>PORTFOLIO</h2>
            <h2 className={this.state.buttonStatus}>ABOUT</h2>
            <h2 className={this.state.buttonStatus}>TEAM</h2>
            <h2 className={this.state.buttonStatus}>CONTACT</h2>
          </section>
        </header>
      </main>
    );
  }
}

export default App;
