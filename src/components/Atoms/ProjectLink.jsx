export const ProjectLink = ({children, ...props}) => {
    return(
        <p {...props}
        className="h-10 w-full text-center text-xl leading-10 hover:bg-amber-950 cursor-pointer"
        >{children}</p>
    )
}