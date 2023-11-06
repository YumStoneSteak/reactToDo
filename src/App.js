import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onAddBtn = (e) => {
    e.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDos((prev) => [...prev, toDo]);

    setToDo("");
  };

  const onInputChange = (e) => {
    setToDo(e.target.value);
  };

  const onDeleteBtn = (index) => {
    console.log(toDos);
    setToDos((prev) => prev.filter((_, i) => i !== index));
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
        {toDos.map((toDo, index, toDos) => {
          return (
            <li key={index}>
              {toDo},{index}
              <button onClick={() => onDeleteBtn(index)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
