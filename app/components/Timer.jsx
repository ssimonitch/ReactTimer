const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped', //started, stopped, paused
    };
  },

  componentDidUpdate: function(prevProp, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000)
  },

  handleStatusChange: function(newTimerStatus) {
    this.setState({timerStatus: newTimerStatus});
  },

  render: function() {
    let {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
