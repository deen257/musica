import React from 'react'

const Radio = ({className, color}) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 22 22'
    >
      <path
        fill='#EFEEE0'
        fillOpacity='0.25'
        d='M7.104 1.833v2.75h-.687c-.239 0-.468.01-.688.046V1.833c0-.375.312-.687.688-.687.375 0 .687.312.687.687z'
      ></path>
      <path
        fill={color}
        d='M15.583 4.583H6.417c-.239 0-.468.01-.688.046-2.365.275-3.896 2.026-3.896 4.538v6.416c0 2.75 1.834 4.584 4.584 4.584h9.166c2.75 0 4.584-1.834 4.584-4.584V9.167c0-2.75-1.834-4.584-4.584-4.584zm-8.36 10.084a2.293 2.293 0 11.002-4.585 2.293 2.293 0 01-.002 4.585zm5.959.229h-.459a.692.692 0 01-.687-.688c0-.376.312-.687.687-.687h.459c.375 0 .687.311.687.687a.693.693 0 01-.687.688zm3.208 0h-.458a.693.693 0 01-.688-.688c0-.376.312-.687.688-.687h.458c.376 0 .688.311.688.687a.692.692 0 01-.688.688zm0-3.667h-3.667a.692.692 0 01-.687-.687c0-.376.312-.688.687-.688h3.667c.376 0 .688.312.688.688a.692.692 0 01-.688.687z'
      ></path>
    </svg>
  )
}

export default Radio