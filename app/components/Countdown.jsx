const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped', // stopped, started, paused
    };
  },

  // React lifecycle method that fires anytime the state or props are updated
  componentDidUpdate: function(prevProp, prevState) {

    // check only for change in countdownStatus state
    if (this.state.countdownStatus !== prevState.countdownStatus) {

      // handle changes in state with switch statement
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },

  // function called when countdownStatus set to 'started'
  startTimer: function() {
    let timer = setInterval(() => {

      let newCount = this.state.count - 1;

      this.setState({
        count: newCount >= 0 ? newCount : 0,
      });

    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  },

  render: function() {
    let {count, countdownStatus} = this.state;

    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={}/>
      } else {

      }
    };

    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
