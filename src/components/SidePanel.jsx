import { Button } from "./Atoms/Button"
import { SidePanelContent } from './Organism/SidePanelContent'
import { Title } from "./Atoms/Title"

export const SidePanel = ({onSelect}) => {
    return(
    <>
        <SidePanelContent>
            <>
                <Title>YOUR PROJECTS</Title>
                <Button onClick={onSelect}>+ Add project!</Button>
            </>
            <p>
                Examples projects ... 
            </p>
        </SidePanelContent>
    </>
    )
}