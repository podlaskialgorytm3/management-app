import { Title } from "../Atoms/Title"
import { CustomText } from "../Atoms/CustomText"
import { Button } from "../Atoms/Button"

export const NoProjectSelected = ({onSelect}) => {
    return(
        <div>
            <img src="src/assets/no-projects.png" width="150px"/>
            <Title>No Project Selected</Title>
            <CustomText>Select a project or get started with a new one.</CustomText>
            <Button onClick={onSelect}>Create a new project.</Button>
        </div>
        
    )
}