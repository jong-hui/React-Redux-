import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Container, Header, Button, List } from 'semantic-ui-react';
import Actions from '../actions';
import TodoListFooter from './TodoListFooter.js';

class TodoList extends Component {
  constructor (props) {
    super(props);

    this.props = props;

    this.id = 0;
    this.state = {
      input : ''
    }
  }

  addTodo = (e) => {
    e.preventDefault();

    this.props.addTodoList({
      name : this.state.input,
      id : this.id++
    });

  }

  render() {
    return (
      <Container>
        <Header as='h2'>할 일 목록</Header>
        <form onSubmit={this.addTodo}>
          <Input placeholder="할 일" value={this.state.input} onChange={(e) => { this.setState({ input : e.target.value })}} />
          <Button content="추가" primary />
        </form>
        <List>
          {
            this.props.list.map(x => 
              <List.Item key={x.id} content={x.name}/>
            )
          }
        </List>
        <TodoListFooter />
      </Container>
    );
  }
}

const mapStateToProps = ( { todolist } ) => {
  return {
    list : [
      ...todolist
    ]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: obj => dispatch(Actions.addTodoList(obj)),
    other: _ => dispatch(Actions.other(_)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) ;