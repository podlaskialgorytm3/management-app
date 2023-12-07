import { NoProjectSelected } from "./ComunicationComponents/NoProjectSelected"
import { AddView } from "./Views/AddView"
import { ProjectView } from "./Views/ProjectView"

export const MainContent = ({view,onSelect,currentProject,...props}) => {
    return(
        <section className="flex flex-col w-2/3 h-screen items-center justify-center">
            {view == "adding" && <AddView {...props}/>}
            {view == "no-selected" && <NoProjectSelected onSelect={onSelect}/>}
            {view == "project" && <ProjectView currentProject={currentProject}/>}
        </section>
    )
}