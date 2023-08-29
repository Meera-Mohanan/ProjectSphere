import React from 'react';
import { useQuery } from '@apollo/client';


import { QUERY_PROJECTS } from '../utils/queries';

import ProjectList from '../components/Projectlist';
import Sidebar from '../components/SideBar';
import Nav from '../components/Nav';
import Footer from "../components/Footer";
// import ChartDonut from "../components/ChartDonut";

const Home = () => {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

    return (
      <main>
        <Nav/>
        <div className='homeContent'>
          <div className="sidebar">
            <Sidebar projects={projects}/>
          </div>
          <div className="project-area my-3">
            { loading ? 
              (
                <div>Loading...</div>
              ) : ( 
                <ProjectList projects={projects}/>
              )
            }
             {/* <div className="donut">
            <ChartDonut myProjects={Profile.projects}/>
          </div> */}
          </div>
        </div>
        <div className="footerContent">
          <Footer/>
        </div>
      </main>
    );  
};

export default Home;