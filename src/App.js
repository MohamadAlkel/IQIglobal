import React from 'react';
import ProjectDetails from './pages/ProjectDetails'
import NavBarProject from './pages/NavBarProject'
import './style/ProjectDetails.scss';

function App() {
  return (
    <div >
       <NavBarProject/>
       <ProjectDetails/>
    </div>
  );
}

export default App;
