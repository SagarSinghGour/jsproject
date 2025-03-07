import React from 'react'
import ShowTasks from './ShowTasks'
import TaskList from './TaskList'

export default function AlloComp({ componentName }) {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>{componentName} Tasks</h1>
            {componentName === "dashbaord" && <div>
                  <TaskList/>
                </div>  
                }
                
            {componentName === "dashbaord" ?
                <ShowTasks taskName={'all'} /> :
                <ShowTasks taskName={componentName} />
            }
        </div>
    )
}
