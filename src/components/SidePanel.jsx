import { Button } from "./Atoms/Button"
import { SidePanelContent } from './Organism/SidePanelContent'
import { Title } from "./Atoms/Title"

export const SidePanel = ({onSelect,data}) => {
    return(
    <>
        <SidePanelContent>
            <>
                <Title>YOUR PROJECTS</Title>
                <Button onClick={onSelect}>+ Add project!</Button>
            </>
            <p>
                {data.length > 0 ? 
                data.map((project) => (
                    <p>{project.title}</p>
                ))
                 : "No projects added."}
            </p>
        </SidePanelContent>
    </>
    )
}