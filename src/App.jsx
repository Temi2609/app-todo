import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  // This uses a usestate to set the state and update the state of the input field
  const [input, setInput] = useState("");
  const [todo, setToDo] = useState([]);

  // This is use to get dynamic input for the input useState

  function nameChange(e) {
    setInput(e);
  }

  // This is use to ensure that on click of the submit button it does
  // not submit an empty string

  function addToArray() {
    if (input.length > 0) {
      setToDo([...todo, input]);
      setInput("");
    }
    console.log(todo);
  }

  // This is a parameterized function that takes in a parameter
  // which is the index and then uses a splice method to remove the
  // item by index and replaces it with the prompt

  function editArray(index) {
    let prompt = window.prompt("Edit Todo");
    let array = [...todo];
    array.splice(index, 1, prompt);
    setToDo([...array]);
  }

  function deleteArray(index) {
    let array = [...todo];
    array.splice(index, 1);
    setToDo([...array]);
  }
  // Current Day
  const currentDate = new Date();
  const currentDate1 = currentDate.getDay();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dDate = dayNames[currentDate1];

  let type = "A weekday";
  let adv = "Input your task for the day";

  if (currentDate1 === 0 || currentDate1 === 6) {
    type = "A weekend";
    adv = "Rest";
  }

  return (
    <>
      <div className="Input">
        <Task
          cDate={dDate}
          value={input}
          change={() => nameChange(event.target.value)}
          btnFn={addToArray}
          advice={adv}
        >
          Hey, it's {" "}
        </Task>

        {todo.map((item, index) => {
          return (
            <div className="btn">
              <p key={index}>
                {item} <button onClick={() => editArray(index)}>Edit</button>
                <div>
                <button onClick={() => deleteArray(index)}>Delete</button>
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
