import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState } from 'react';

const valueOfView = ["adding","project","no-selected"];

function App() {
  const [projects,setProjects] = useState()
  const [view,setView] = useState("no-selected")
  return (
    <div className="flex flex-row">
      <SidePanel/>
      <MainContent data={projects} view={view}/>
    </div>
  );
}

export default App;
