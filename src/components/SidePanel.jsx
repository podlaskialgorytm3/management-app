import { Button } from "./Atoms/Button"
import { SidePanelContent } from './Organism/SidePanelContent'

export const SidePanel = ({onSelect}) => {
    return(
    <>
        <SidePanelContent>
            <>
                <h2 className="text-xl font-bold text-whtie my-4">YOUR PROJECTS</h2>
                <Button onClick={onSelect}>+ Add project!</Button>
            </>
            <p>
                Examples projects ... 
            </p>
        </SidePanelContent>
    </>
    )
}