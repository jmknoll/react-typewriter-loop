import React from 'react';
import PropTypes from 'prop-types';

class TypewriterLoop extends React.Component {

  constructor(props) {
    super(props);
    this.renderTypedStrings = this.renderTypedStrings.bind(this);
  }

  renderTypedStrings() {
    const { typedStrings, delay } = this.props
    return <h1>{typedStrings[0]}</h1>
  }


  render() {
    return (
      <div>
        {this.renderTypedStrings()}
      </div>
    );
  }
}

export default TypewriterLoop;

/* props

typedStrings: array of strings to type out
typeSpeed: a number to indicate typing speed, 0 - 100, 100 is instant
deleteSpeed: a number to indicate deletion speed, 0 - 100, 100 is instant
delay: delay after typing each string, in ms
loop: loop over items or just run through them once
cursor: boolean to indicate whether cursor should show

*/

TypewriterLoop.defaultProps = {
  typedStrings: ['string1', 'string2'],
  typeSpeed: 50,
  deleteSpeed: 50,
  delay: 1000,
  loop: true,
  cursor: true
};

TypewriterLoop.PropTypes = {
  typedStrings: PropTypes.arrayOf(PropTypes.string),
  typeSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delay: PropTypes.number,
  loop: PropTypes.bool,
  cursor: PropTypes.bool
};