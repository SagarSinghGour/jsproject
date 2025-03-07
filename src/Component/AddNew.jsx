import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
export default function AddNew() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("P0");
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { taskName, taskDescription, startDate, endDate, status, priority, id: Date.now() };
    dispatch(addTodo(newTask));
    // setTaskName("");
    // setTaskDescription("");
    // setStartDate("");
    // setEndDate("");
    // setStatus("Pending");
    // setPriority("P0");
  };
 
  return (
    <form onSubmit={handleSubmit} className="w-100 p-2">
      <div className="content d-flex p-2 flex-column w-100 justify-content-center align-items-center" style={{ rowGap: "20px" }} >
        <h2>ADD TASK</h2>
        <div className="inputtext w-50">
          <h6>Task Name</h6>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="inputtext w-50">
          <h6>Task Description</h6>
          <textarea
            cols={30}
            rows={3}
            className="form-control"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="date d-flex w-50 gap-5">
          <div className="start w-50">
            <h6>Start Date</h6>
            <input
              type="date"
              className="form-control w-100 rounded-3"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="end w-50">
            <h6>End Date</h6>
            <input
              type="date"
              className="form-control w-100 rounded-3"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="status w-50 gap-5 d-flex mt-4">
          <div className="end w-50">
            <h6>Status</h6>
            <select className="form-control w-100 rounded-3" onChange={(e) => { setStatus(e.target.value) }}>
              
              <option value="Pending">Pending</option>
              <option value="completed">completed</option>
              <option value="Deferred">Deferred</option>
              <option value="deployed">deployed</option>
              <option value="Incompletedtasks">Incompletedtasks</option>
            </select>
          </div>
          <div className="end w-50">
            <h6>Priority</h6>
            <select className="form-control w-100 rounded-3" onChange={(e) => { setPriority(e.target.value) }}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

        </div>

        <button type="submit" className="btn btn-primary w-50 mt-4 p-2">
          ADD TASK
        </button>
      </div>
    </form>


  );
}
