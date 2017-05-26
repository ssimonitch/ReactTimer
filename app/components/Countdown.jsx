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
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.time = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  // function called when countdownStatus set to 'started'
  startTimer: function() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
      });

      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped',
        });
      }
    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  },

  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },

  render: function() {
    let {count, countdownStatus} = this.state;

    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
