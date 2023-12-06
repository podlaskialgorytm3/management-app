import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState } from 'react';

function App() {
  const [projects,setProjects] = useState()
  const [view,setView] = useState("no-selected")

  const enablingAddingView = () => {
    setView('adding')
  }
  const handleInput = (e) => {
    let title = ''
    let description = ''
    let date = ''
    if(e.target.name == 'title'){
      title = e.target.value
    }
    if(e.target.name == 'description'){
      description = e.target.value
    }
    if(e.target.name == 'date'){
      date = e.target.value
    }
    return [title,description,date]
  }
  

  return (
    <div className="flex flex-row">
      <SidePanel onSelect={enablingAddingView}/>
      <MainContent data={projects} view={view} onSelect={enablingAddingView} onChange={handleInput}/>
    </div>
  );
}

export default App;
