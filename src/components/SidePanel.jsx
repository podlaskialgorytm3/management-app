export const SidePanel = ({onSelect}) => {
    return(
    <>
        <div className="flex flex-col justify-around items-center w-1/3 h-screen px-8 py-16 bg-stone-900 text-stone-50 md:w-72 pt-20 pb-20">
            <>
                <h2 className="text-xl font-bold text-whtie my-4">YOUR PROJECTS</h2>
                <button
                    onClick={onSelect}
                    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add project</button>
            </>
            <p>
                Examples projects ... 
            </p>
        </div>
    </>
    )
}