const React = require('react');

const Controls = React.createClass({

  // controls cant do anything wihtout countdownStatus
  // so set to require
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  },

  // function to set status on all buttons
  onStatusChange: function(newStatus) {
    // currying pattern: use a function to generate a different function
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function() {
    let {countdownStatus} = this.props;

    // for button that gets rendered depending on state
    let renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
