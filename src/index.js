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
    let ar = string.split('');

    let letterCounter = 0;

    window.setInterval( () => {
      if (letterCounter != ar.length){
        this.setState({
          typedString: this.state.typedString + ar[letterCounter]
        });
        letterCounter ++
      } else {
        return
      }
    }, 100)

  }


  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Here we're looping strings</h2>
        <p>{this.state.activeString}</p>
        <h2>And here we're animating letters</h2>
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