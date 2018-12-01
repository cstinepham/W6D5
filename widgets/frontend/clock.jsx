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

    let monthDay = this.state.date.getDate();
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][this.state.date.getDay()];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.state.date.getMonth()];
    let year = this.state.date.getFullYear();

    return (

      <div>
      <div className ="div-background">
        <h1>Our Clock!</h1>
        <h2 className="clock">{hours} : {minutes} : {seconds}</h2>
        <h3 className="clock"> {day} {month} {monthDay} {year}</h3>
        </div>
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
