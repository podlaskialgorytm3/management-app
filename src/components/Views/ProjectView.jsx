import { Title } from "../Atoms/Title"
import { CustomText } from "../Atoms/CustomText"
import { Date } from "../Atoms/Date"
import { InputArea } from "../Molecules/InputArea"
import { Task } from "../Atoms/Task"
import { nanoid } from 'nanoid';

export const ProjectView = ({currentProject,handleTask,handleTaskForm,resetForm,onDelete,onTaskDelete}) => {
    return(
        <div className="flex flex-col h-1/2 w-2/3 relative">
            <Title>{currentProject.title}</Title>
            <CustomText>{currentProject.description}</CustomText>
            <Date>{currentProject.date}</Date>
            <img src="src/assets/delete.png" width="40px" className="absolute top-8 right-0 hover:cursor-pointer" onClick={onDelete}/>
            <form method="POST" onSubmit={handleTaskForm} ref={resetForm}>
                <InputArea type="text" label="TASK" onChange={handleTask}/>
            </form>
            <div className="mt-4">
                {currentProject.tasks.map((task) => (
                    <Task key={nanoid()}>
                    {task}
                    <img 
                    src="src/assets/delete-red.png" 
                    className="absolute w-7 inline-block top-1 right-0 mr-2"
                    onClick={() => onTaskDelete(task)}
                    />
                    </Task>
                ))}
            </div>
        </div>
    )
}