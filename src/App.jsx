import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState,useRef } from 'react';
import { nanoid } from 'nanoid';

const simpleFormData = {
  id: 0,
  title: '',
  description: '',
  date: '',
  tasks: []
}


function App() {
  const [projects,setProjects] = useState([])
  const [view,setView] = useState("no-selected")
  const [formData, setFormData] = useState(simpleFormData);
  const [currentProject,setCurrentProject] = useState(null);
  const currentTask = useRef(null);
  const resetForm = useRef(null);

  const enablingAddingView = () => {
    setView('adding')
  }
  const setProjectView = (projectObject) => {
    setView("project")
    setCurrentProject(projectObject)
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: nanoid()
    }));
  };

  const handleTask = (e) => {
      currentTask.current = e.target.value
  }
  const handleTaskForm = (e) => {
    e.preventDefault()
    setCurrentProject((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, currentTask.current]
    }))
    console.log(currentProject)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prevProjects) => (
      [...prevProjects,formData]
    ))
    resetForm.current.reset()

  };

  return (
    <div className="flex flex-row">
      <SidePanel onSelect={enablingAddingView} data={projects} selectView={setProjectView}/>
      <MainContent data={projects}
                   view={view} 
                   onSelect={enablingAddingView} 
                   currentProject={currentProject}
                   handleSubmit={handleSubmit} 
                   handleTask = {handleTask}
                   handleTaskForm = {handleTaskForm}
                   onChange={handleInput} 
                   resetForm={resetForm}
                   />
    </div>
  );
}

export default App;
