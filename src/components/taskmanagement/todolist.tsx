import  { useState, useEffect,useRef } from "react";
import { Col, Row, ListGroup, ListGroupItem, Button,Modal , Form } from "react-bootstrap";
import { User_Headerlayout } from "../layout/UserHeaderLayout";
import { TaskstatusList } from "./tasklist";
import axios from "axios";
import { API_URL } from "../ApiUrl";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type TaskDetails = {
  id: number;
  tasktitle: string;
  taskdescription?: string;
  taskstatus: 'To Do' | 'In Progress' | 'Done';
};

export const MyTodolist = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);
  const taskTitleRef = useRef<HTMLInputElement>(null);

  const taskdecriptionRef = useRef<HTMLTextAreaElement>(null);


  const [AddTaskModal, setAddTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: 0,
    tasktitle: '',
    taskdescription: '',
    taskstatus: 'To Do',
  });

  const fetchAllTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const AddNewTask = async () => {
    if (!newTask.tasktitle)
      
      {
        taskTitleRef.current?.focus();
        toast.error("Please Enter Task Title.!");

      }
     else if (!newTask.taskdescription)
      
        {
          taskdecriptionRef.current?.focus();
          toast.error("Please Enter Task Description.!");
  
        }
      
      /* return alert("Title is required!"); */
   else
   {
    const { id, ...taskWithoutId } = newTask;
    const res = await axios.post(API_URL, taskWithoutId);
    toast.success("New Task added succesfully .!");
    setTasks([...tasks, res.data]);
    setAddTaskModal(false);
    setNewTask({id:0, tasktitle: '', taskdescription: '', taskstatus: 'To Do' });
   } 
  };



  const dragtaskstatusupdate = async (task: TaskDetails, newStatus: 'To Do' | 'In Progress' | 'Done') => {
    const updatedTask = { ...task, taskstatus: newStatus };
  
    try {
      const res = await axios.put(`${API_URL}/${task.id}`, updatedTask);
      toast.success(" Task Status Updated succesfully .!");
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? res.data : t))
      );
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };
  
  


  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <User_Headerlayout>
      <Row>
        <Col xs={12} className="home-content">
          <Row>
            <Col xs={12} className="paddingleft0px">
              <ListGroup className="subpagetitle">
                <ListGroupItem className="inactivepage paddingleft0px">Dashboard</ListGroupItem>
                <ListGroupItem className="inactivepage">/</ListGroupItem>
                <ListGroupItem className="activepage">To do List</ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs={12} className="textalignleft paddingleft0px paddingtop1rem">
              <h5 className="pagemaintitle">
                Task Details <Button className="addnebtn" onClick={() => setAddTaskModal(true)}>Add New Task</Button>
              </h5>
            </Col>
          </Row>

          <DndProvider backend={HTML5Backend}>
          <Col xs={12} className="paddingtop1rem" id="moblviewboard">
            <Row id="moblviewboardrow">
            
              <TaskstatusList
                tasktitle="To Do"
                taskstatus="To Do"
                tasks={tasks.filter((t) => t.taskstatus === "To Do")}
                onDropTask={dragtaskstatusupdate}
              />
              <TaskstatusList
                tasktitle="In Progress"
                taskstatus="In Progress"
                tasks={tasks.filter((t) => t.taskstatus === "In Progress")}
                onDropTask={dragtaskstatusupdate}
              />
              <TaskstatusList
                tasktitle="Done"
                taskstatus="Done"
                tasks={tasks.filter((t) => t.taskstatus === "Done")}
                onDropTask={dragtaskstatusupdate}
              />


            </Row>
            </Col>
            </DndProvider>
<ToastContainer position="top-right" autoClose={3000} />

                 {/* Modal for adding new task */}
        <Modal show={AddTaskModal} onHide={() => setAddTaskModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  ref={taskTitleRef}
                  value={newTask.tasktitle}
                  onChange={(e) =>
                    setNewTask({ ...newTask, tasktitle: e.target.value })
                  }
                  placeholder="Enter Title"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  ref={taskdecriptionRef}
                  rows={2}
                  value={newTask.taskdescription}
                  onChange={(e) =>
                    setNewTask({ ...newTask, taskdescription: e.target.value })
                  }

                  placeholder="Enter Description"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Status</Form.Label>
                <Form.Select
                    value={newTask.taskstatus}
                    onChange={(e) =>
                      setNewTask({ ...newTask, taskstatus: e.target.value as TaskDetails['taskstatus'] })
                    }
                  >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setAddTaskModal(false)}>
              Cancel
            </Button>
            <Button onClick={AddNewTask}>Save Task</Button>
          </Modal.Footer>
        </Modal>
           
        
        </Col>
      </Row>
    </User_Headerlayout>
  );
};
