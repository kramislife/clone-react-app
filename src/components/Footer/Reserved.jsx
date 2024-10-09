import React from 'react'

const Reserved = () => {
  return (
    <div className="flex justify-between items-center lg:mx-14 lg:px-0 px-4 py-4 border-t border-neutral-800/90">
    <p className="text-neutral-500 text-xs tracking-wide">
      &copy; 2024 Elysium VR. All rights reserved.
    </p>
    <div className="flex items-center space-x-2">
      <a href="#" className="text-neutral-500 text-xs tracking-wide">
        Privacy Policy
      </a>
      <span className="text-neutral-500"> • </span>
      <a href="#" className="text-neutral-500 text-xs tracking-wide">
        Terms of Service
      </a>
    </div>
  </div>
  )
}

export default Reserved
