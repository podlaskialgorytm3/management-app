const labelStyle = "text-sm font-bold uppercase text-stone-500"
const inputStyle = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

export const InputArea = ({label,type,onChange,name}) => {
    return(
        <>
            <label className={labelStyle}>{label}</label>
            <input className={inputStyle} type={type} required onChange={onChange} name={name}/>
        </>
    )
}