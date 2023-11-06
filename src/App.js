import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onAddBtn = (e) => {
    e.preventDefault();

    if (toDo === "") {
      return;
    }

    const newToDo = {
      date: Date.now(),
      text: toDo,
    };

    setToDos((prev) => [...prev, newToDo]);

    setToDo("");
  };

  const onInputChange = (e) => {
    setToDo(e.target.value);
  };

  const onDeleteBtn = (date) => {
    setToDos((prev) => prev.filter((todo) => todo.date !== date));
  };

  return (
    <div>
      <h1>To Do List : {toDos.length}</h1>
      <form>
        <input
          type="text"
          placeholder="Write your To Do..."
          onChange={onInputChange}
          value={toDo}
        ></input>
        <button onClick={onAddBtn}>Add To Do</button>
      </form>
      <ul>
        {toDos.map((toDo) => {
          return (
            <li key={toDo.date}>
              <h2>{toDo.text}</h2>
              <h4>{new Date(toDo.date).toLocaleTimeString()}</h4>
              <button onClick={() => onDeleteBtn(toDo.date)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
