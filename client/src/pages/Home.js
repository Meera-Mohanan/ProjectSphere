import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";
import Nav from "../components/Nav";

// console.log(
//   "Checking import path for ProjectList:",
//   "../components/ProjectList"
// );

import ProjectList from "/components/Projectlist";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

// // // Add a console.log statement to check the import path
// console.log(
//   "Checking import path for ProjectList:",
//   "../components/ProjectList"
// );

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main>
      <Nav />
      <div className="homeContent">
        <div className="sidebar">
          <Sidebar projects={projects} />
        </div>
        <div className="project-area my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <h3>Project List Component</h3>
            <ProjectList projects={projects} />
          )}
        </div>
      </div>
      <div className="footerContent">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
