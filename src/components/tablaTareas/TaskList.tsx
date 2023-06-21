
import React, { useState } from "react";
import {
  DndProvider,
  useDrag,
  useDrop,
  DropTargetMonitor,
  DragSourceMonitor,
} from "react-dnd";
import { HTML5Backend, NativeTypes } from "react-dnd-html5-backend";

interface Task {
  id: number;
  content: string;
}

interface TaskItemProps {
  task: Task;
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, moveTask }) => {
  const [, drop] = useDrop({
    accept: "task",
    hover(item: { index: number }, monitor: DropTargetMonitor) {
      if (!drop) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div className="container containerItem" ref={drop} style={{ opacity }}>
      <div className="divTexto" ref={drag}>{task.content}</div>
    </div>
  );
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, content: "Tarea 1" },
    { id: 2, content: "Tarea 2" },
    { id: 3, content: "Tarea 3" },
    { id: 4, content: "Tarea 4" },
    { id: 5, content: "Tarea 5" },
    { id: 6, content: "Tarea 6" },
  ]);

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const dragTask = tasks[dragIndex];
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(dragIndex, 1);
      updatedTasks.splice(hoverIndex, 0, dragTask);
      return updatedTasks;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="borderLista">
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default TaskList;
