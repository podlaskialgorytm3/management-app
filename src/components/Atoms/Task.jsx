export const Task = ({children, ...props}) => (
    <p className="w-90 h-10 bg- mb-4 text-center bg-stone-900 text-cyan-50 leading-10 rounded-xl hover:bg-stone-700 cursor-pointer" 
    {...props}>{children}</p>
)