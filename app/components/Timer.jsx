const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={0}/>
      </div>
    )
  }
});

module.exports = Timer;
