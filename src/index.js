import React from 'react';
import PropTypes from 'prop-types';

class TypewriterLoop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeString: 'test',
      stringCounter: 0,
      typedString: ''
    }

    this.loopArray = this.loopArray.bind(this);
    this.loopStrings = this.loopStrings.bind(this);
    this.animateLetters = this.animateLetters.bind(this);
  }

  componentDidMount() {

    this.loopArray();

    //this.animateLetters('this is a test string that should iterate out one letter at a time')
  }

  loopArray() {
    const { typedStrings, delay, typeSpeed } = this.props;

    // delay is all pauses and time taken to write each letter
    let totalDelay = (typedStrings.length * 2)
      + typedStrings.join('').split('').length * typeSpeed

   // window.setInterval( () => {
      this.loopStrings();
    //}, totalDelay)
  }

  loopStrings() {
    const { typedStrings, delay } = this.props;

    for ( let i = 0; i < typedStrings.length; i ++ ) {
      window.setTimeout( () => {
        this.animateLetters(typedStrings[this.state.stringCounter])
        this.setState({
          stringCounter: this.state.stringCounter++
        })
      }, 4000 * (i + 1) )
    }
  }

  animateLetters(string) {
    console.log('animating letters')
    const { delay, typingSpeed } = this.props;

    let ar = string.split('');
    let letterCounter = 0;

    for ( let i = 0; i < ar.length; i++ ) {
      window.setTimeout( () => {
        if (letterCounter <= ar.length - 1){
          this.setState({
            typedString: this.state.typedString + ar[letterCounter]
          });
          letterCounter ++
        } else {
          return;
        }
      }, typingSpeed * (i + 1))
    }

    for ( let i = 0; i < ar.length; i++ ) {
      window.setTimeout( () => {
        if ( letterCounter >= 0) {
          let str = this.state.typedString
          let newstr = str.substring(0, str.length - 1);
          this.setState({
            typedString: newstr
          })
        } else {
          return;
        }
      }, typingSpeed * (i + 1 + ar.length) + delay )
    }
  }


  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Here we're looping strings (with animation?)</h2>
        <p>{this.state.typedString}</p>
      </div>
    );
  }
}

export default TypewriterLoop;

/* props

className: class name
typedStrings: array of strings to type out
typeSpeed: a number to indicate typing speed, 0 - 100, 100 is instant
deleteSpeed: a number to indicate deletion speed, 0 - 100, 100 is instant
delay: delay after typing each string, in ms
loop: loop over items or just run through them once
cursor: boolean to indicate whether cursor should show

*/

TypewriterLoop.defaultProps = {
  className: 'typewriter-loop',
  typedStrings: ['string1', 'string2', 'string3', 'string4'],
  typeSpeed: 100,
  deleteSpeed: 100,
  delay: 1000,
  loop: true,
  cursor: true
};

TypewriterLoop.PropTypes = {
  className: PropTypes.string,
  typedStrings: PropTypes.arrayOf(PropTypes.string),
  typeSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delay: PropTypes.number,
  loop: PropTypes.bool,
  cursor: PropTypes.bool
};