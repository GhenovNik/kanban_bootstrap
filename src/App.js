import "bootstrap/dist/css/bootstrap.css";
import Column from "./Column";
import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

const initialTasks = [
  {
    id: Math.random(),
    priority: 1,
    status: "todo",
    name: "Task 1",
    description: "Learn JS",
  },
  {
    id: Math.random(),
    priority: 2,
    status: "progress",
    name: "Task 2",
    description: "Learn React",
  },
  {
    id: Math.random(),
    priority: 3,
    status: "review",
    name: "Task 3",
    description: "Learn Bootstrap",
  },
  {
    id: Math.random(),
    priority: 4,
    status: "done",
    name: "Task 4",
    description: "Learn MUI",
  },
  {
    id: Math.random(),
    priority: 5,
    status: "todo",
    name: "Task 5",
    description: "Learn Redux",
  },
];

function App() {
  const [statuses, setStatuses] = useState([
    "todo",
    "progress",
    "review",
    "done",
  ]);
  const [priority, setPriority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [tasks, setTasks] = useState(initialTasks);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  function changePriority(id, direction) {
    const number = direction === "up" ? 1 : -1;
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, priority: el.priority + number } : el
      )
    );
  }
  function changeStatus(id, value, status) {
    const currentIndex = statuses.indexOf(status);
    const newStatus = statuses[currentIndex + value];
    const newTasks = tasks.map((el) =>
      id === el.id ? { ...el, status: newStatus } : el
    );
    setTasks(newTasks);
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((el) => el.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (updatedTask) => {
    const newTask = tasks.map((el) =>
      el.id === updatedTask.id ? { ...updatedTask } : el
    );
    setTasks(newTask);
  };
  return (
    <div className="App">
      <div className="container text-center">
        <h1>Kanban Board</h1>
        <CreateTaskModal
          statuses={statuses}
          priority={priority}
          addNewTask={addNewTask}
        />
        <div className="row align-items-start">
          {statuses.map((el) => (
            <Column
              status={el}
              statuses={statuses}
              priority={priority}
              tasks={tasks}
              changePriority={changePriority}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
