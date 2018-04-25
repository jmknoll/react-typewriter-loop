import React, { Component } from 'react';

import TypewriterLoop from '../src/ReactTypewriterLoop';

export default class Application extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h2>React Typewriter Loop</h2>
        <TypewriterLoop />
      </div>
    )
  }
}