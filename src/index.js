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
  }


  loopStrings() {
    const { typedStrings, delay, typeSpeed } = this.props;

    function calculateDelay(index) {
      // get # of letters up to index
      let count = typedStrings.slice(0, index).join('').split('').length
      // and calculate delay from total # of letters
      let totalDelay = (typeSpeed * count * 2) + (delay * index * 2);
      return totalDelay
    }

    let stringCounter = 0;

    for (let i = 0; i < typedStrings.length; i++) {
      window.setTimeout( () => {
        this.animateLetters(typedStrings[stringCounter])
        stringCounter++
        if (stringCounter === typedStrings.length) {
          window.setTimeout(() => {
            this.loopStrings();
          }, (delay * 2) + (typedStrings[i].length * typeSpeed * 2) )
        }
      }, calculateDelay(i))
    }

    /*

    window.setInterval( () => {

      this.setState({activeString: typedStrings[this.state.stringCounter]});

      this.animateLetters(typedStrings[this.state.stringCounter])


      if (this.state.stringCounter >= typedStrings.length - 1){
        this.setState({
          stringCounter: 0,
        });
      } else {
        this.setState({
          stringCounter: this.state.stringCounter + 1
        })
      };
    }, 5000)
    */
  }

  animateLetters(string) {
    const typingSpeed = 100;
    const delay = 1000;

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
  typedStrings: ['react typewriter loop', 'can display products, services, or features', 'of your business', 'starting from today'],
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