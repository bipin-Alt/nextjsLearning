import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={
        'inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50 ' +
        className
      }
    >
      {children}
    </button>
  )
}

export default Button
