import React from 'react';
import './App.css';
import TaskDashboard from './components/TaskDashboard';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import { ContextTodo } from './ContextTodo';

function App() {
  return (
    <ContextTodo>
      <div className="todoapp stack-large">
        <Title />
        <AddItemForm />
        <TaskDashboard />
      </div>
    </ContextTodo>
  );
}

export default App;
