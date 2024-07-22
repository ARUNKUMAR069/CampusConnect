import React from "react";
import { forwardRef } from "react";
const Buttons=React.forwardRef(function Buttons({
    children, type = 'submit', bgColor = 'bg-blue-600', textColor = 'text-white', className = '', ...props


},ref) {

return(
    <button   className={`w-full md:w-1/2 py-2 bg-[#03AED2] text-white rounded-lg hover:bg-[#68D2E8] focus:outline-none focus:bg-[#68D2E8]`}ref={ref}{...props}>
        {children}
        </button>
)


})
export default Buttons












