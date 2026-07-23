import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={
        'block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 disabled:opacity-50 ' +
        className
      }
    />
  )
}

export default Input
