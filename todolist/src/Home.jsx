// home.jsx

import React, { useState } from 'react';
import Create from './Create';
import './App.css';

function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="home"> {/* Tambahkan kelas "home" */}
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => { // Tambahkan parameter index untuk key
          return (
            <div key={index}> {/* Tambahkan key */}
              {todo}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
