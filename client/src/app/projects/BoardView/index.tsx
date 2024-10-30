import { useGetTasksQuery } from '@/state/api';
import React from 'react'

type BoardProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
  };

  const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

function BoardView({id, setIsModalNewTaskOpen}: BoardProps) {
    const { data: task, isLoading, error } = useGetTasksQuery({projectId: Number(id)});
    const [updateTaskStatus] = useUpdateTaskStatusMutation();

    const moveTask = (taskId: number, toStatus: string) => {
      updateTaskStatus({ taskId, status: toStatus });
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred while fetching tasks</div>;
  return (
    <div>BoardView</div>
  )
}

export default BoardView