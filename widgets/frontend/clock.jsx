import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    this.tick = this.tick.bind(this);
  }

  render() {
    let seconds = this.state.date.getSeconds();
    let minutes = this.state.date.getMinutes();
    let hours = this.state.date.getHours();

    return (
      <div>
        <h1>Our Clock!</h1>
        <h2>{hours} : {minutes} : {seconds}</h2>
      </div>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({date: new Date()});
  }


}


export default Clock;
