import React from "react";

const ToDoList = ({ toDoList }) => {
  return (
    <div className="list-toDo">
      <h5 className="mt-3 italic">What To Do :</h5>
      <ul className="px-5">
        {toDoList !== 0 ? (
          toDoList.map((item, key) => (
            <li className="py-2 border-b border-green-100 " key={key}>
              {item.task}
            </li>
          ))
        ) : (
          <h4>No Task</h4>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
