import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "./Component/Sidebar.jsx"
import { Route, Routes } from "react-router-dom";

import AddNew from "./Component/AddNew.jsx";
import TaskStats from "./Component/TaskStats.jsx";
import AlloComp from "./Component/AlloComp.jsx";

function App() {
  return (
    <>
      <div style={{ display: "flex", width: "100%", gap: "10px" }}>
        <div style={{ width: "20%", minWidth: "250px", display: "flex" }}>
          <Sidebar />
        </div>
        <div style={{ width: "80%", minWidth: "600px", height: "100vh", overflow: "auto" }}>
          <Routes>
            <Route path="/dashboard" element={<AlloComp componentName={"dashbaord"} />} />
            <Route path="/completedtasks" element={<AlloComp componentName={"completed"} />} />
            <Route path="/pendingtask" element={<AlloComp componentName={"Pending"} />} />
            <Route path="/Incompletedtasks" element={<AlloComp componentName={"incompleted"} />} />
            <Route path="/deployed" element={<AlloComp componentName={"deployed"} />} />
            <Route path="/deferred" element={<AlloComp componentName={"Deferred"} />} />
            <Route path="/addnew" element={<AddNew />} />
            <Route path="/taskstats" element={<TaskStats />} />
          </Routes>
        </div>
      </div>


    </>
  )
}

export default App;

