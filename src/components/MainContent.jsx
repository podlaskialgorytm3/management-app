import { NoProjectSelected } from "./ComunicationComponents/NoProjectSelected"
import { AddView } from "./Views/AddView"

export const MainContent = ({view,onSelect}) => {
    return(
        <section className="flex flex-col w-2/3 h-screen items-center justify-center">
            {view == "adding" && <AddView />}
            {view == "no-selected" && <NoProjectSelected onSelect={onSelect}/>}
        </section>
    )
}