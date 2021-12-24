import React, { Component } from 'react';

export class Calendar extends Component {
  static displayName = Calendar.name;

  constructor(props) {
    super(props);
    this.state = { days: [], loading: true };
  }

  componentDidMount() {
    this.populateDays();
  }

  static renderCalendar(days) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {days.map(day =>
            <tr key={day.name}>
              <td>{day.name}</td>
              <td>{day.tasks}</td>
              <td><button>Done</button></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Calendar.renderCalendar(this.state.days);

    return (
      <div>
        <h1 id="tabelLabel" >Calendar</h1>
        <p>This component demonstrates fetching the calendar.</p>
        {contents}
      </div>
    );
  }

  async populateDays() {
    const response = await fetch('days/monday');
    const data = await response.json();
    var days = this.state.days;
    days.push(data);
    this.setState({ days: days, loading: false });
  }
}
