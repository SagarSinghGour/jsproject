import React from 'react';
import './TaskStats.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TaskStats() {
  let { todo } = useSelector(state => state.todoreducer);
  let lengthofall = todo.length;
  let lengthofcompelte = todo.filter((a) => { return a.status === "completed" }).length
  let lengthofdeployed = todo.filter((a) => { return a.status === "deployed" }).length
  let lengthofpending = todo.filter((a) => { return a.status === "Pending" }).length
  let lengthofdeffred = todo.filter((a) => { return a.status === "Deferred" }).length
  let lengthofincompletedtasks = todo.filter((a) => { return a.status === "Incompletedtasks" }).length

  return (
    <>
      <div className="flex flex-col w-full justify-between">
        <h1 className="sm:text-2xl text-3xl font-bold my-8 text-center">Tasks</h1>
        <div className='ALL'>
          <div className="second">
            <NavLink to="/dashboard" >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title">TOTAL TASK</h2>
                  <div class="task-number">{lengthofall}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon">T</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard"  >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title">COMPLETED TASK</h2>
                  <div class="task-number">{lengthofcompelte}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon" style={{ background: "#0f766e" }}>C</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard"   >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title">TASK IN PROGRESS</h2>
                  <div class="task-number">{lengthofincompletedtasks}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon" style={{ background: "#f59e0b" }}>T</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard"  >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title">PENDING</h2>
                  <div class="task-number">{lengthofpending}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon" style={{ background: "#be185d" }}>P</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard"  >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title"> DEPLOYED</h2>
                  <div class="task-number">{lengthofdeployed}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon" style={{ background: "#f59e0b" }}>D</div>
              </div>
            </NavLink>
            <NavLink to="/dashboard"  >
              <div class="task-card">
                <div class="task-content">
                  <h2 class="task-title">DEFERRED</h2>
                  <div class="task-number">{lengthofdeffred}</div>
                  <div class="task-stats">110 last month</div>
                </div>
                <div class="task-icon" style={{ background: "#0f766e" }}>D</div>
              </div>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}