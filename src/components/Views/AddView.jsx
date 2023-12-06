import { InputArea } from "../Molecules/InputArea"
import { Input } from '../Atoms/Input'
export const AddView = ({onChange}) => {
    return(
        <div>
            <form method="POST" className="mt-4 text-right flex flex-col items-center justify-around h-80 w-80">
                <InputArea label="Title" type="text" onChange={onChange} name={"title"}/>
                <InputArea label="Description" type="text" onChange={onChange} name={"description"}/>
                <InputArea label="Date due" type="date" onChange={onChange} name={"date"}/>
                <div className="w-80 flex flex-row justify-between">
                    <Input type="submit" value="Save" color="green"/>
                    <Input type="reset" value="Clear" color="red" />
                </div>
            </form>
        </div>
    )
}