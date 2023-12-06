import { NoProjectSelected } from "./ComunicationComponents/NoProjectSelected"
import { AddView } from "./Views/AddView"

export const MainContent = ({view,onSelect,onChange}) => {
    return(
        <section className="flex flex-col w-2/3 h-screen items-center justify-center">
            {view == "adding" && <AddView onChange={onChange} />}
            {view == "no-selected" && <NoProjectSelected onSelect={onSelect}/>}
        </section>
    )
}