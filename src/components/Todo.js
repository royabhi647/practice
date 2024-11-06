import React, { useState } from "react";

function Todo() {
  const [taskName, setTaskName] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [editTaskIndex, setEditTaskIndex] = useState(-1);
  const [editedTaskName, setEditedTaskName] = useState("");


  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      setAllTask((prev) => [...prev, taskName]);
      setTaskName("");
    }
  }

  const handleEnterBtn = (e) => {
    if (e.key === 'Enter') {
      if (taskName.trim() !== "") {
        setAllTask((prev) => [...prev, taskName]);
        setTaskName("");
      }
    }
  }

  const handleDeleteTask = (index) => {
    const filteredtasks = allTask.filter((task, idx) => idx !== index);
    setAllTask(filteredtasks);
  }

  const handleTaskEdit = (index) => {
    setEditTaskIndex(index);
    setEditedTaskName(allTask[index]);
  }

  const handleUpdateTask = (index) => {
    if (editedTaskName.trim() !== "") {
      setAllTask(allTask.map((task, idx) => idx === index ? editedTaskName : task));
      setEditTaskIndex(-1);
      setEditedTaskName("");
    }
  }

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <input type="text" placeholder="Enter your task" value={taskName} onChange={(e) => setTaskName(e.target.value)} onKeyDown={(e) => handleEnterBtn(e)} style={{ padding: "8px", outline: "none" }} />
        <button style={{ marginLeft: "10px", padding: "8px", cursor: "pointer" }} onClick={handleAddTask}>Add</button>
      </div>

      <div style={{ margin: "10px 0px" }}>
        <hr />
      </div>


      <ul style={{ listStyle: "disc", paddingLeft: "24px" }}>
        {
          allTask?.length > 0 && allTask.map((task, index) => {
            return (
              <div style={{ display: "flex", margin: "8px 0px" }}>
                {
                  editTaskIndex === index ?
                    <>
                      <input
                        type="text"
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                        style={{ padding: "4px" }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUpdateTask(index)
                          }
                        }}
                      />
                      <button style={{ marginLeft: "10px", padding: "2px", cursor: "pointer" }} onClick={() => handleUpdateTask(index)}>Update</button>
                      <button
                        style={{ marginLeft: "10px", padding: "2px", cursor: "pointer" }}
                        onClick={() => setEditTaskIndex(-1)}
                      >
                        Cancel
                      </button>
                    </> :
                    <>
                      <li key={index}>{task}</li>
                      <button style={{ marginLeft: "10px", padding: "2px", cursor: "pointer" }} onClick={() => handleDeleteTask(index)}>Delete</button>
                      <button style={{ marginLeft: "10px", padding: "2px", cursor: "pointer" }} onClick={() => handleTaskEdit(index)}>Edit</button>
                    </>}

              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo;
