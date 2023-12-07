import { Button } from "./Atoms/Button"
import { SidePanelContent } from './Organism/SidePanelContent'
import { Title } from "./Atoms/Title"
import { ProjectLink } from "./Atoms/ProjectLink"

export const SidePanel = ({onSelect,data,selectView}) => {
    return(
    <>
        <SidePanelContent>
            <>
                <Title>YOUR PROJECTS</Title>
                <Button onClick={onSelect}>+ Add project!</Button>
            </>
            <div className="w-full">
                {data.length > 0 ? 
                data.map((project) => (
                    <ProjectLink key={project.id} onClick={() => selectView(project)}>{project.title}</ProjectLink>
                ))
                 : "No projects added."}
            </div>
        </SidePanelContent>
    </>
    )
}