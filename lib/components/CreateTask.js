import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  createTask(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { title } = this.state;

    reference.push({ title, isCompleted: false });
    this.setState({ title: '' });
  }

  render() {
    return (
      <form className="CreateTask" onSubmit={this.createTask.bind(this)}>
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <input type="submit" value="Create Task" />
      </form>
    );
  }
}
