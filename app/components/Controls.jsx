const React = require('react');

const Controls = React.createClass({

  // controls cant do anything wihtout countdownStatus
  // so set to require
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
  },

  render: function() {
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused'){
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
