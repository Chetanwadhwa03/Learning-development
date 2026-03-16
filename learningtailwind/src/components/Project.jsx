import React from 'react'

const Project = () => {
  return (
    <>
    <div className="maincontainer flex border-4 border-black ">
        <div className="sidebar transition-all duration-1000 bg-green-400 w-0 h-screen md:w-80">Sidebar</div>
        <div className="maincontent bg-red-400 flex-1 h-screen">maincontent</div>
    </div>
    </>
  )
}

export default Project
