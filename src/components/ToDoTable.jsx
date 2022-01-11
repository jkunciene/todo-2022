import React from 'react';

const ToDoTable = ({ task }) => {
    console.log( task);

    return (       
           
                <tr>
                    <td>{task.id}</td>
                    <td>{task.text}</td>
                    <td>{task.isCompleted?"Done":"Stil in Progress"}</td>                    
                </tr>  
            
       
    )
}

export default ToDoTable
