import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROJECT } from '../utils/queries';
import TaskBoard from '../components/TaskBoard';
import { DndContext } from '@dnd-kit/core';
import DraggableCard from '../components/DraggableCard';
import DroppableZone from '../components/DroppableZone';

const Project = () => {
  // Routing variables
  const { projectId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId: projectId },
  });
  // Pulls in project data based on url
  const project = data?.project || {};

  // Containers for the drop zones
  const containers = ['To Do', 'In Progress', 'Done'];
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <DraggableCard id="draggable"><span>Drag me</span></DraggableCard>
  );

  // If the item is dropped over a container, set it as the parent; otherwise, reset the parent to `null`
  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='homeContent'>
          <div className="sidebar">
            {/* Render your sidebar component here */}
          </div>
          <TaskBoard>
            {containers.map(id => (
              <DroppableZone key={id} id={id}>
                {parent === id ? draggableMarkup : `Drop here for ${id}`}
              </DroppableZone>
            ))}
          </TaskBoard>
        </div>
        {/* Render your draggableMarkup component here if parent is null */}
        {parent === null ? draggableMarkup : null}
      </DndContext>
    </div>
  );
};

export default Project;
