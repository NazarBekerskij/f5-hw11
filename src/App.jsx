import './App.css'
import { Component } from 'react'

import Filter from './components/Filter/Filter'
import Info from './components/Info/Info'
import TodoEditor from './components/TodoEditor/TodoEditor'
import TodoList from './components/TodoList/TodoList'
import { nanoid } from 'nanoid'
import initialTodos from "./todo.json"

class App extends Component {
  state={
    todos: initialTodos,
    filter: '',
  }


handleComplitedTodo = (id) => {
  this.setState((prev) => ({
    todos: prev.todos.map(todo => todo.id === id? { ...todo, completed: !todo.completed }: todo
    )
  }))
}


  handleDelete = (id) => {
    this.setState(prev => ({
      todos: prev.todos.filter(todo => todo.id !== id)
    }))
  }


  handleSubmit = (text) => {
    const data = {
      id: nanoid(),
      text: text,
      completed: false,
    }

    this.setState((prev) => ({
      todos: [...prev.todos, data]
    }))
  }


  handleFilter = (text ) => {
    this.setState({
      filter: text,
    })
  }


  render(){    
    const {todos, filter} = this.state
    const filteredTodo =  todos.filter((todo) => todo.text.toLowerCase().includes(filter.toLowerCase())) 
    const count = todos.length

    const done = todos.filter((todo) => todo.completed).length 

    return(
      <>
      <Info count={count} done={done}/>
      <TodoEditor onForm={this.handleSubmit}/>
      <Filter onFilter={this.handleFilter}/>
      <TodoList todos={filteredTodo} onDelete={this.handleDelete} handleCompleted={this.handleComplitedTodo}/>
      </>
    )
  }
}


export default App
