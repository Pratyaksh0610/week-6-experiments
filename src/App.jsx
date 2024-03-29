import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  // const [id, setId] = useState(0);
  //changed from todo to todos...some code might break
  // useEffect(() => {
  //   console.log(id);
  //   // try {
  //   axios
  //     .get("https://sum-server.100xdevs.com/todo?id=" + id)
  //     .then(function (response) {
  //       // console.log(response);
  //       const arr = [];
  //       if (response.data.todo) {
  //         console.log(response.data.todo);
  //         // console.log(typeof response.data.todo);
  //         arr.push(response.data.todo);
  //       }
  //       setTodos(arr);
  //     });
  //   // } catch {}
  // }, [id]);

  // let i = 0;
  return (
    <>
      <GetSum></GetSum>
      {/* <GetId setId={setId} id={id} /> */}
      {/* <div> */}
      {/* {console.log("IN")}
        {console.log(todos)} */}
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}></Todo>
      ))}
      {/* </div> */}
      {/* <div> */}

      {/* <CardWrapper>
        <CardWrapper>
        <div>
        <h1>Bacha hai yaha</h1>
        </div>
        </CardWrapper>
      </CardWrapper> */}
      {/* <CardWrapper innerComponent={<TextComponent />} /> */}
      {/* <TaskAdder todo={todo} setTodo={setTodo}></TaskAdder>
      {console.log(todo.length)}
    <TaskDisplayer todo={todo}></TaskDisplayer> */}
      {/* </div> */}
    </>
  );
}

function GetId(props) {
  const [tempId, settempId] = useState("");
  return (
    <>
      <input
        placeholder="Input id"
        onChange={(e) => {
          settempId(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.setId(tempId);
        }}
      >
        Submit
      </button>
    </>
  );
}

function sum(a) {
  if (a == NaN || a == undefined) {
    return 0;
  }
  console.log(typeof a);
  console.log(a);
  let val = parseInt(a);

  console.log(val);
  val = parseInt(val);
  if (val <= 1) {
    return val;
  }
  let summ = val - 1;
  return val + sum(summ);
}

function GetSum() {
  // const [summ, setSum] = useState("");
  const [totalSum, setTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  // let val = sum(parseInt(summ));
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Input num"
        onChange={(e) => {
          setTotal(sum(e.target.value));
        }}
      ></input>
      <h1>Sum is {totalSum}</h1>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

function TextComponent() {
  //   return <h1>hi there</h1>;
}

function CardWrapper({ children }) {
  //   return <div style={{ border: "2px solid black" }}>{children}</div>;
}

function TaskDisplayer(props) {
  // const arr = props.todo;
  // return (
  //   <div>
  //     {arr.map((task) => {
  //       return (
  //         <div>
  //           <h1>{task.title}</h1>
  //           <p>{task.description}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
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
