import { SidePanel } from "./components/SidePanel";
import { MainContent } from "./components/MainContent";
import { useState,useRef,useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';

function App() {
  const [projects,setProjects] = useState([])
  const [view,setView] = useState("no-selected")
  const [formData, setFormData] = useState({});
  const [currentProject,setCurrentProject] = useState(null);
  const currentTask = useRef(null);
  const resetForm = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/dane');
             console.log(response.data)
        } catch (error) {
            console.error('Błąd pobierania danych:', error.stack);
        }
    };

    fetchData();
  }, []);


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
    let projectIndex = projects.findIndex(project => project.id === currentProject.id)
    if(projectIndex !== -1){
      setProjects((prevProjects) => [
        ...prevProjects.slice(0,projectIndex),
        {
          ...prevProjects[projectIndex],
          tasks: [...prevProjects[projectIndex].tasks,currentTask.current]
        },
        ...prevProjects.slice(projectIndex + 1)
      ])
    }
    resetForm.current.reset()
  }

  const handleDeleting = () => {
    let projectIndex = projects.findIndex(project => project.id === currentProject.id)
    setView("no-selected")
    if(projectIndex !== -1){
      setProjects((prevProjects) => [
        ...prevProjects.slice(0,projectIndex),
        ...prevProjects.slice(projectIndex + 1)
      ])
    }
  }

  const handleTaskDeleting = (chosenTask) => {
    let projectIndex = projects.findIndex(project => project.id === currentProject.id)
    if(projectIndex !== -1){
      let updatedTasks = currentProject.tasks.filter(task => task != chosenTask)
      setCurrentProject((prevProject) => ({
        ...prevProject,
        tasks: updatedTasks,
      }));
      setProjects((prevProjects) => ([
        ...prevProjects.slice(0,projectIndex),
        {
          ...prevProjects[projectIndex],
          tasks: updatedTasks
        },
        ...prevProjects.slice(projectIndex + 1)
      ]))
    }
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
                   resetForm={resetForm}
                   onDelete={handleDeleting}
                   onTaskDelete={handleTaskDeleting}
                   onChange={handleInput} 
                   />
    </div>
  );
}

export default App;