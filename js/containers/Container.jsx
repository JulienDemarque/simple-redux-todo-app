import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Input from "../Input";

import addTodo from "../actions/action_add_todo";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  saveTodo() {
    this.props.onAddTodo(this.state.input);
  }

  render() {
    return (
      <div>
        <h1>Redux Todo App</h1>
        <Input input={this.state.input} handleChange={this.handleChange} />
        <button onClick={this.saveTodo}>Save</button>
        <ul>
          {this.props.todoList.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Container.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  onAddTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ todoList: state.todoList });

const mapDispatchToProps = dispatch => ({
  onAddTodo: todo => {
    dispatch(addTodo(todo));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
