import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState } from 'react';

function App() {
  const [projects,setProjects] = useState()
  const [view,setView] = useState("no-selected")
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  });
  
  const enablingAddingView = () => {
    setView('adding')
  }
const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-row">
      <SidePanel onSelect={enablingAddingView}/>
      <MainContent data={projects} view={view} onSelect={enablingAddingView} onChange={handleInput} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
