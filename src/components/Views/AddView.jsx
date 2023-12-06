import { InputArea } from "../Molecules/InputArea"

export const AddView = () => {
    return(
        <div>
            <form method="POST" className="mt-4 text-right flex flex-col items-center justify-around h-80 w-80">
                <InputArea label="Title" type="text" />
                <InputArea label="Description" type="text"/>
                <InputArea label="Date due" type="date" />
            </form>
        </div>
    )
}