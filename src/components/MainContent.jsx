import { NoProjectSelected } from "./ComunicationComponents/NoProjectSelected"
import { AddView } from "./Views/AddView"
import { ProjectView } from "./Views/ProjectView"

export const MainContent = ({view,onSelect,currentProject,handleSubmit,handleTask,handleTaskForm,resetForm, ...props}) => {
    return(
        <section className="flex flex-col w-2/3 h-screen items-center justify-center">
            {view == "adding" && <AddView handleSubmit={handleSubmit} resetForm={resetForm} {...props}/>}
            {view == "no-selected" && <NoProjectSelected onSelect={onSelect}/>}
            {view == "project" && <ProjectView currentProject={currentProject} handleTask={handleTask} handleTaskForm={handleTaskForm} resetForm={resetForm}/>}
        </section>
    )
}