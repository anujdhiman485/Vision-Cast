import React from 'react'
import { AiToolsData } from '../assets/assets.js'
// import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {

    const navigate = useNavigate()
    const {user} = useUser()
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>
           <span className='text-primary-100'>AI</span>  Tools
        </h2>
        <p className='text-grey-500 max-w-lg mx-auto'>
            Everything You Need to Create Post are Present Here 
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center'>
  {AiToolsData.map((tool, index) => (
    <div
      key={index}
      className='rounded-xl transition-transform duration-300 hover:scale-105'
    >
      <div
        className='p-8 rounded-lg bg-[#FDFDFE] shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] flex flex-col items-start min-h-[260px] h-full border border-gray-100'
        onClick={() => {
          if (user) {
            navigate(tool.path)
          } else {
            alert('Please log in to access this tool.')
          }
        }}
        style={{
          cursor: 'pointer'
        }}
      >
        <div
          className='w-12 h-12 p-3 rounded-xl flex items-center justify-center mb-4'
          style={{
            background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`
          }}
        >
          <tool.Icon className='w-6 h-6 text-white' />
        </div>
        <h3 className='mb-2 text-lg font-semibold'>{tool.title}</h3>
        <p className='text-grey-400 text-sm'>{tool.description}</p>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default AiTools
