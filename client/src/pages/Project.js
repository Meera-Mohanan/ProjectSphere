import React from 'react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROJECT } from '../utils/queries';
import TaskBoard from '../components/TaskBoard';

import Nav from '../components/Nav';
import Sidebar from '../components/SideBar';

const Project = () => {

// variables and functions------------------

  // routing variables
  const { projectId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId: projectId },
  });
  //pulls in project data based on url
  const project = data?.project || {};

  // Containers for the drop zones
  const containers = ['To Do', 'In Progress', 'Done'];
  const [parent, setParent] = useState(null);

//JSX----------------------------------

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Nav />
      <div className='homeContent'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <TaskBoard />
      </div>
      </div>

  );
};

export default Project;
