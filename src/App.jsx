import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  // let i = 0;
  return (
    <>
      <TaskAdder todo={todo} setTodo={setTodo}></TaskAdder>
      {console.log(todo.length)}
      <TaskDisplayer todo={todo}></TaskDisplayer>
    </>
  );
}

function TaskDisplayer(props) {
  const arr = props.todo;
  return (
    <div>
      {arr.map((task) => {
        return (
          <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function TaskAdder(props) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <input
        placeholder="Description"
        onChange={(e) => setTaskDescription(e.target.value)}
      ></input>
      <button
        onClick={() => {
          const newTask = {
            title: taskName,
            description: taskDescription,
          };
          const arr = props.todo;
          const prevTasks = [...arr];
          prevTasks.push(newTask);
          props.setTodo(prevTasks);
        }}
      >
        Add task
      </button>
    </>
  );
}

export default App;
