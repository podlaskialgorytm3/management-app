import styled from "styled-components"

const StyledInput = styled.input`
    background-color: ${(props) => props.color === "red" ? '#ff4f78' : '#8aff4f'};
`

export const Input = ({type,value,color,...props}) => (
    <StyledInput type={type} 
            value={value} 
            className="w-32 px-2 py-1 bg-stone-200 cursor-pointer rounded-2xl"
            color={color}
            {...props}
            />
)