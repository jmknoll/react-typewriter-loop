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

    this.loopStrings = this.loopStrings.bind(this);
    this.animateLetters = this.animateLetters.bind(this);
  }

  componentDidMount() {

    this.loopStrings();

    this.animateLetters('this is a test string that should iterate out one letter at a time')
  }

  loopStrings() {
    const { typedStrings, delay } = this.props;

    window.setInterval( () => {

      this.setState({activeString: typedStrings[this.state.stringCounter]});

      if (this.state.stringCounter >= typedStrings.length - 1){
        this.setState({
          stringCounter: 0,
        });
      } else {
        this.setState({
          stringCounter: this.state.stringCounter + 1
        })
      }
    }, 2000)
  }

  animateLetters(string) {
    const typingSpeed = 100;
    const delay = 1000;

    let ar = string.split('');
    let letterCounter = 0;

    //implement with setTimeout instead
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
          currentAction = 'typing';
          return;
        }
      }, typingSpeed * (i + 1 + ar.length) + delay )
    }







    //write text
    /*
    if (currentAction === 'typing'){
      let typeInt = window.setInterval( () => {
        if (letterCounter <= ar.length - 1){
          this.setState({
            typedString: this.state.typedString + ar[letterCounter]
          });
          letterCounter ++
        } else {
          currentAction = 'erasing';
          return;
        }
      }, 100)
    } else {
      window.clearInterval(typeInt);
    }

    let eraseInt;

    //erase text
    if (currentAction === 'erasing') {
      let eraseInt = window.setInterval( () => {
        if ( letterCounter >= 0) {
          let newstr = this.state.typedString.substring(0, str.length - 1);
          this.setState({
            typedString: newstr
          })
        } else {
          currentAction = 'typing';
          return;
        }
      }, 100)
    } else {
     if (eraseInt) {
      window.clearInterval(eraseInt)
      } else {
        return
      }
    }
    */
  }


  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Here we're looping strings</h2>
        <p>{this.state.activeString}</p>
        <h2>And here we're animating letters</h2>
        <p>{this.state.typedString}</p>
        <h2>And here we're combining them both</h2>
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
  typedStrings: ['string1', 'string2'],
  typeSpeed: 50,
  deleteSpeed: 50,
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