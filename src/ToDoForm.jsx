import React from "react";

const ToDoForm = ({ setToDoLIst, toDoList }) => {
  //   const [value, setValue] = React.useState("");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const refTask = React.useRef(null);

  const handleAddList = () => {
    if (refTask.current.value === " ") {
      alert("Empty input");
    } else {
      setToDoLIst([
        ...toDoList,
        {
          task: refTask.current.value,
        },
      ]);
      refTask.current.value = " ";
    }
  };

  return (
    <div className="mt-6 ">
      <form action="">
        <input
          type="text"
          className="px-2 py-2 rounded-md border border-green-200 bg-green-100 w-[368px] outline-none text-black mb-5"
          ref={refTask}
          //   onChange={handleChange}
        />
      </form>
      <button
        className="px-3 py-2 rounded-md bg-green-500 w-full"
        onClick={handleAddList}
        // type="reset"
        // disabled={!value}
      >
        Add To Do
      </button>
    </div>
  );
};

export default ToDoForm;
