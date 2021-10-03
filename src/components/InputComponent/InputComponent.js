import React,{forwardRef} from 'react'

function InputComponent({type,value,required,placeholder},ref) {
    return <input type={type} value={value} placeholder={placeholder} required={required} ref={ref}/>
}

const forWordRef = forwardRef(InputComponent)

export default forWordRef
