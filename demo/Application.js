import React, { Component } from 'react';

import TypewriterLoop from '../src/ReactTypewriterLoop';

export default class Application extends Component {

  constructor(props) {
    super(props)

    this.state = {
      typeSpeed: 100,
      deleteSpeed: 100,
      delay: 1000
    }
  }

  render() {
    let {typeSpeed, deleteSpeed, delay} = this.state;
    typeSpeed = parseInt(typeSpeed);
    return(
      <div className='wrapper'>
        <div className='background'>
        </div>
        <div className='intro'>
          <div className='text'>
            <h2 className='header title'>React Typewriter Loop</h2>
            <TypewriterLoop 
              className='typewriter-loop' 
              typeSpeed={parseInt(this.state.typeSpeed)} 
              deleteSpeed={parseInt(this.state.deleteSpeed)} 
              delay={parseInt(this.state.delay)}
            />
          </div>
          <div className='controls'> 
            <form className="pure-form">
              <fieldset>
                  <p className='header content'>Try React Typewriter Loop Now!</p>
                  <div>
                    <label>Typing Speed</label>
                    <input type="number" value={this.state.typeSpeed} onChange={ (e) => { this.setState({typeSpeed: e.target.value})} }/>
                  </div>
                  <div>
                    <input type="number" placeholder="Delete Speed" />
                  </div>
                  <button type="submit" className="pure-button pure-button-primary">Sign in</button>
              </fieldset>
          </form>
          </div>
        </div>
      </div>
    )
  }
}