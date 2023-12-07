import { Title } from "../Atoms/Title"
import { CustomText } from "../Atoms/CustomText"
import { Date } from "../Atoms/Date"
import { InputArea } from "../Molecules/InputArea"
import { Task } from "../Atoms/Task"
import { nanoid } from 'nanoid';

export const ProjectView = ({currentProject,handleTask,handleTaskForm,resetForm}) => {
    return(
        <div className="flex flex-col h-1/2 w-2/3 relative">
            <Title>{currentProject.title}</Title>
            <CustomText>{currentProject.description}</CustomText>
            <Date>{currentProject.date}</Date>
            <form method="POST" onSubmit={handleTaskForm} ref={resetForm}>
                <InputArea type="text" label="TASK" onChange={handleTask}/>
            </form>
            <div className="mt-4">
                {currentProject.tasks.map((task) => (
                    <Task key={nanoid()}>{task}</Task>
                ))}
            </div>
        </div>
    )
}