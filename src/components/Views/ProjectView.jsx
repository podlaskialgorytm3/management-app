import { Title } from "../Atoms/Title"
import { CustomText } from "../Atoms/CustomText"
import { Date } from "../Atoms/Date"

export const ProjectView = ({currentProject}) => {
    return(
        <div className="flex flex-col h-1/2 w-2/3 relative">
            <Title>{currentProject.title}</Title>
            <CustomText>{currentProject.description}</CustomText>
            <Date>{currentProject.date}</Date>
        </div>
    )
}