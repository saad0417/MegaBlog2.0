import React from 'react'

function Button(
    {children,  // text inside the button
     type = "button",
     bgColor = "bg-blue-600",
     textColor = "text-white",
     className = "",
     ...props
    }
) {
  return (
    <button
      className={`rounded-lg px-4 py-2 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:cursor-not-allowed disabled:opacity-60 ${bgColor} ${textColor} ${className}`}
      {...props}
      type={type}
    >
        {children}
    </button>
  )
}

export default Button