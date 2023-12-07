import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [projects,setProjects] = useState([])
  const [view,setView] = useState("no-selected")
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    date: '',
    tasks: []
  });

  const enablingAddingView = () => {
    setView('adding')
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: nanoid()
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prevProjects) => (
      [...prevProjects,formData]
    ))
  };

  return (
    <div className="flex flex-row">
      <SidePanel onSelect={enablingAddingView} data={projects}/>
      <MainContent data={projects} view={view} onSelect={enablingAddingView} onChange={handleInput} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
