import React from 'react';
import PropTypes from 'prop-types';

class TypewriterLoop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeString: 'test',
      stringCounter: 0
    }

    this.loopStrings = this.loopStrings.bind(this);
  }

  componentDidMount() {

    this.loopStrings();
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
        let augment = this.state.stringCounter + 1
        this.setState({
          stringCounter: this.state.stringCounter + 1
        })
      }
    }, 2000)
  }


  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {this.state.activeString}
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