import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const App = () => {
const [toDoList, setToDoLIst] = React.useState([])

  return (
    <section className="min-h-screen bg-green-200 flex justify-center items-center text-white">
      <div className="max-w-[400px] w-full bg-green-900 rounded-md p-4">
        <div className="text-center font-semibold text-xl">
          <h2>My To Do List</h2>
        </div>

        <ToDoForm toDoList={toDoList} setToDoLIst={setToDoLIst} />
        <ToDoList toDoList={toDoList} />
      </div>
    </section>
  );
};

export default App;
