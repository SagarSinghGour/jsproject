// import React from 'react'
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// export default function ShowTasks({ taskName }) {
//     let { todo } = useSelector(state => state.todoreducer);
//     return (
//         <div className='d-flex pt-5 justify-content-center align-items-center gap-2 flex-wrap'>
//             {todo.length ?
//                 todo.map((task, index) => {
//                     if (task.status === taskName) {
//                         return  <>
//                         <div className="card">
//                           <div className="card-body">
//                             <div className="task-carddd">
//                               <h3>{task.priority}</h3>
//                               <br />
//                               <h4>{task.taskName}</h4>
//                             </div>
//                             <div className="task-carddd-card">
//                               <div>
//                                 <h6>
//                                   <b>Start Date</b>
//                                 </h6>
//                                 <p style={{ fontStyle: "light", fontSize: "10px" }}>
//                                   {task.startDate}
//                                 </p>
//                               </div>
//                               <div>
//                                 <h6>
//                                   <b>End Date</b>
//                                 </h6>
//                                 <p style={{ fontStyle: "light", fontSize: "10px" }}>
//                                   {task.endDate}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="task-carddd-button">
//                               <button>
//                                 <h6>{task.status}</h6>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     }
//                     if (taskName === "all") {
//                         return <div class="card" style={{ width: "18rem" }}>
//                             <div class="card-body">
//                                 <h5 class="card-title">{task.taskName}</h5>
//                                 <p class="card-text">{task.status}</p>
//                                 <a href="#" class="btn btn-primary">{task.id}</a>
//                             </div>
//                         </div>
//                     }
//                 })
//                 :
//                 <p> No todo found /<NavLink to="/addnew">add new task</NavLink> </p>
//             }

//         </div>
//     )
// }
  


import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function ShowTasks({ taskName }) {
  let { todo } = useSelector((state) => state.todoreducer);

 
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#a3f07d";
      case "in progress":
        return "#7df0d1";
      case "Pending":
        return "#7ac9fa";
        case "deferred":
          return "green";
      default:
        return "#b27eed";
    }
  };

  return (
    <div className="d-flex pt-5 justify-content-center align-items-center gap-2 flex-wrap bord `task-carddd ${getStatusClass(task.status)}`" >
      {todo.length ? (
        todo.map((task, index) => {
          if (task.status === taskName) {
            return (
              <>
              <div className="card">
                <div className="card-body">
                  <div className="task-carddd" style={{ backgroundColor: getStatusColor(task.status) }}>
                   <p style={{fontSize:"16px", textAlign:"end" , padding:"5px"}}>{task.priority}</p>
                    <div style={{textAlign:"center" ,fontSize:"24px", paddingBottom: "1rem"}}><p >{task.taskName}</p></div>
                  </div>
                  <div className="task-carddd-card">
                    <div>
                      <p >
                        <b style={{paddingTop:"2"}}>Start Date</b>
                      </p>
                      <p style={{ fontStyle: "light", fontSize: "10px" }}>
                        {task.startDate}
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>End Date</b>
                      </p>
                      <p style={{ fontStyle: "light", fontSize: "10px" }}>
                        {task.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="task-carddd-button">
                  <p  style={{fontSize:"15px"}}>Sagar Singh</p>    
                    <button  style={{ backgroundColor: getStatusColor(task.status) }}>
                      <h6>{task.status}</h6>
                    </button>
                  </div>
                </div>
              </div>
            </>
            );
          }

          if (taskName === "all") {
            return (
                <>
                <div className="card">
                  <div className="card-body">
                    <div className="task-carddd" style={{ backgroundColor: getStatusColor(task.status) }}>
                     <p style={{fontSize:"16px", textAlign:"end" , padding:"5px"}}>{task.priority}</p>
                      <div style={{textAlign:"center" ,fontSize:"24px", paddingBottom: "1rem"}}><p >{task.taskName}</p></div>
                    </div>
                    <div className="task-carddd-card">
                      <div>
                        <p >
                          <b style={{paddingTop:"2"}}>Start Date</b>
                        </p>
                        <p style={{ fontStyle: "light", fontSize: "10px" }}>
                          {task.startDate}
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>End Date</b>
                        </p>
                        <p style={{ fontStyle: "light", fontSize: "10px" }}>
                          {task.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="task-carddd-button">
                    <p  style={{fontSize:"15px"}}>Sagar Singh</p>    
                      <button  style={{ backgroundColor: getStatusColor(task.status) }}>
                        <h6>{task.status}</h6>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })
      ) : (
        <p style={{paddingTop:"70px"}}>
          No todo found /<NavLink to="/addnew">add new task</NavLink>
        </p>
      )}
    </div>
  );
}
