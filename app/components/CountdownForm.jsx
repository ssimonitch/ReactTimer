const React = require('react');

const CountdownForm = React.createClass({

  onSubmit: function(e) {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    console.log('input count', $('input').length);

    if (strSeconds !== '' && strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    } else if (strSeconds.toUpperCase() === 'THE FINAL COUNTDOWN') {
      this.props.onFinalCountdown(320);
    } else {
      alert('Please input valid number');
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
