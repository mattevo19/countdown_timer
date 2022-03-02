import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  stopCountdown = () => {
    clearInterval(this.interval);
  };

  startCountdown = () => {
    this.interval = window.setInterval(() => {
      const count = this.state.count - 1;

      if (count === 0) {
        console.log("finished");
        this.setState((prevState) => ({ count: prevState.count - 1 }));
        this.stopCountdown();
      } else {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
      }
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div className="middle">
        {count}
        <div>
          <button onClick={this.startCountdown} className="mt">
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
