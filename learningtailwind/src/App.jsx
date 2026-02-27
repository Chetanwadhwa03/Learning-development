import React from 'react'
import Project from './components/Project'

function App() {

  return (
    <>
      <div className="maincontainer h-screen bg-white dark:bg-black">
        <h1 className='text-black text-3xl dark:text-white '>Hi there</h1>
        <button onClick={() => {
          console.log("Hey i am in the function ")
          document.documentElement.classList.toggle('dark')
        }} className='bg-black text-white p-2 dark:bg-white dark:text-black  rounded-md cursor-pointer'>Toggle Theme</button>
      </div>

    </>
  )
}

export default App
