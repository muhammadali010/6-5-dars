import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">To-Do List</h1>
      <div className="flex mb-4">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="flex-grow p-2 border rounded-md" placeholder="Add a new to-do" />
        <button onClick={handleAddTodo} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md" >
          +
        </button>
      </div>
      <div className="todo-list space-y-3">
        {todos.map((todo, index) => (
          <div key={index} className="flex justify-between items-center p-2 border rounded-md bg-gray-50"  >
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} className="px-3 py-1 bg-red-600 text-white rounded-md" >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleClearAll} className="mt-6 px-4 py-2 w-full bg-purple-600 text-white rounded-md">
        Clear All
      </button>
    </div>
  );
}

export default App;
