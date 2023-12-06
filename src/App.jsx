import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState } from 'react';

const valueOfView = ["adding","project","no-selected"];

function App() {
  const [projects,setProjects] = useState()
  const [view,setView] = useState("no-selected")

  const enablingAddingView = () => {
    setView('adding')
  }

  return (
    <div className="flex flex-row">
      <SidePanel onSelect={enablingAddingView}/>
      <MainContent data={projects} view={view} onSelect={enablingAddingView}/>
    </div>
  );
}

export default App;
