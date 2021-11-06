import React from "react";
import { useParams } from "react-router-dom";
import "./Button";
import "./TaskDetails.css";

const TaskDetails =() =>{
    const params = useParams();
    
    return (
        <>
            <div className="back-button-container">
			<button> voltar</button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
					minima eius magnam culpa sequi explicabo.
				</p>
			</div>
        </>


    )

}
export default TaskDetails;