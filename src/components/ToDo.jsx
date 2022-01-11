import React, { useState } from 'react';
import { Container, Navbar, Table } from 'react-bootstrap';
import ToDoTable from './ToDoTable';

const ToDo = () => {
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "Clean you room",
            isCompleted: false
        },
        {
            id: 2,
            text: "Do your homework",
            isCompleted: true
        },
        {
            id: 3,
            text: "To go to cinema",
            isCompleted: false
        }
    ])
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light" className='my-3'>
            <Container>
                <Navbar.Brand href="#">To - Do list</Navbar.Brand>
            </Container>
            </Navbar>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task text</th>
                    <th>Task status</th>                
                </tr>
            </thead>
            <tbody>

            {
               tasks.map((task, index) => (
                    <ToDoTable key={index} task={task}/>
                )) 
            }

            </tbody>
            </Table>
            
        </>
    )
}

export default ToDo
