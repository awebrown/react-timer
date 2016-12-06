let React = require('react'),
    Clock = require('Clock'),
    Countdown = React.createClass({
      render: function() {
        return (
          <div>
            <Clock totalSeconds={129} />
          </div>
        );
      }
    })

module.exports = Countdown;
