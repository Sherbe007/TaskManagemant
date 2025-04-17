import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useDrag } from 'react-dnd';
import { FaCheck,FaInfo, FaPencilAlt } from 'react-icons/fa';

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
  task: TaskDetails;
};

export const TaskStatus: React.FC<Props> = ({ task }) => {

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dragRef = useRef<HTMLDivElement>(null);
  drag(dragRef); 

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card className="mb-2 shadow-sm border-0 task-card textalignleft">
        <Card.Body>
          <Card.Title>
            { task.taskstatus === 'Done' ?
            (
                <span className='textalignright checkicon'><FaCheck/></span>
            ) :

            task.taskstatus === 'In Progress' ?
            (<span className='textalignright Infoicon'><FaInfo/></span>) :

          
            (<span className='textalignright PencilAlticon'><FaPencilAlt/></span>)
                
                
        } 
        
        {task.tasktitle}  </Card.Title>
          {task.taskdescription && <Card.Text >{task.taskdescription}</Card.Text>}
          
        </Card.Body>
      </Card>
    </div>
  );
};
