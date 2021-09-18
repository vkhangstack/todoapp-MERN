import { Component } from "react";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

class Tasks extends Component {
  state = { tasks: [], currentTask: "" };

  async componentDidMount() {
    try {
      const { data } = await getTasks();
      this.setState({ tasks: data });
    } catch (error) {
      alert(error.message);
    }
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ currentTask: input.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const originalTask = this.state.tasks;
    try {
      const { data } = await addTask({ task: this.state.currentTask });
      const tasks = originalTask;
      tasks.unshift(data);
      this.setState({ tasks, currentTask: "" });
    } catch (error) {
      alert(error.message);
    }
  };
  handleUpdate = async (currentTask) => {
    const originalTask = this.state.tasks;
    try {
      const tasks = [...originalTask];
      const index = tasks.findIndex((task) => task._id === currentTask);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      this.setState({ tasks });
      await updateTask(currentTask, { completed: tasks[index].completed });
    } catch (error) {
      this.setState({ tasks: originalTask });
      alert(error.message);
    }
  };
  handleDelete = async (currentTask) => {
    const originalTask = this.state.tasks;
    try {
      const tasks = originalTask.filter((task) => task._id !== currentTask);
      this.setState({ tasks });
      await deleteTask(currentTask);
    } catch (error) {
      this.setState({ tasks: originalTask });
      alert(error.message);
    }
  };
}

export default Tasks;
