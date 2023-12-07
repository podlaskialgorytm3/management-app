import { Title } from "../Atoms/Title"
import { CustomText } from "../Atoms/CustomText"
import { Date } from "../Atoms/Date"
import { InputArea } from "../Molecules/InputArea"

export const ProjectView = ({currentProject,handleTask,handleTaskForm}) => {
    return(
        <div className="flex flex-col h-1/2 w-2/3 relative">
            <Title>{currentProject.title}</Title>
            <CustomText>{currentProject.description}</CustomText>
            <Date>{currentProject.date}</Date>
            <form method="POST" onSubmit={handleTaskForm}>
                <InputArea type="text" label="TASK" onChange={handleTask}/>
            </form>
            <div>
                {currentProject.tasks.map((task) => (
                    <p>{task}</p>
                ))}
            </div>
        </div>
    )
}