import React, { forwardRef} from 'react'

const Input = React.forwardRef(function Input({


    placeholder,
    type='text',
    
    ...props

}, ref) {

    return <input className='w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#68D2E8]' placeholder={placeholder} type={type}  ref={ref}  {...props}/>



})


export default Input