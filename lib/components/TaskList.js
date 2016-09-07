import React, { Component } from 'react';
import firebase from '../firebase';
import CreateTask from './CreateTask';
import Task from './Task';

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  get reference() {
    return firebase.database().ref(`user-tasks/${this.props.uid}`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const tasks = snapshot.val();
      if (!tasks) { return this.setState({ tasks: [] }); }
      this.setState({
        tasks: Object.entries(tasks)
                     .map(([key, value]) => Object.assign({ key }, value)),
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  render() {
    const tasks = this.state.tasks.map((task) => <Task {...task} reference={this.reference.child(task.key)} />);

    return (
      <section className="TaskList">
        <h3>Task List ({this.props.uid})</h3>
        <CreateTask reference={this.reference}/>
        {tasks}
      </section>
    );
  }
}
