import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si'

const tools = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700 text-5xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  { name: 'Database', icon: <FaDatabase className="text-purple-500 text-5xl" /> },
]

const Tools = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          My Development Tools
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These are the technologies and tools I use for building modern web
          applications, APIs, and full-stack projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{tool.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">
                {tool.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools