import React from 'react'
import Form from './components/Form';
import ListTodo from './components/ListTodo';
import TodoState from './context/todoState';

function App() {
  return (
    <div>
      <TodoState>
        <Form />
        <ListTodo />
      </TodoState>
    </div>
  );
}

export default App;
