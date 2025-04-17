import React from 'react';
import { Col } from 'react-bootstrap';
import { useDrop } from 'react-dnd';
import { TaskStatus } from './taskstatus';

const ItemTypes = {
  TASK: 'task',
};

type TaskDetails = {
  id: number;
  tasktitle: string;
  taskdescription?: string;
  taskstatus: 'To Do' | 'In Progress' | 'Done';
};

type Props = {
  tasktitle: string;
  taskstatus: 'To Do' | 'In Progress' | 'Done';
  tasks: TaskDetails[]; // Update to TaskDetails type
  onDropTask: (draggedTask: TaskDetails, newStatus: 'To Do' | 'In Progress' | 'Done') => void;
};

export const TaskstatusList: React.FC<Props> = ({ tasktitle, taskstatus, tasks, onDropTask }) => {
    const [{  }, dragtaskstatusRef] = useDrop({
        accept: ItemTypes.TASK,
        drop: (draggedTask: TaskDetails) => {
            debugger
            console.log('Dropped item:', taskstatus);
          if (draggedTask.taskstatus !== taskstatus) {
            onDropTask(draggedTask, taskstatus);
          }
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      });
  return (
    <Col md={4} sm={12} className="status-drag" ref={dragtaskstatusRef}>
      <Col className="status-drag-box">
      <h5
  className={`text-center ${tasktitle === 'To Do' ? 'todostyle' : tasktitle === 'In Progress' ? 'inprogressstyle' : tasktitle === 'Done' ? 'donestyle' : ''}`}
>
  {tasktitle}
</h5>
        {tasks.map((task) => (
          <TaskStatus key={task.id} task={task} />
        ))}
      </Col>
    </Col>
  );
};
