import React from 'react'
import burger from '../assets/burger.png'
import { Link } from 'react-router-dom'
const menus = [
{
  id :1,
  title :'home',
  link:'/'
},{
  id :2,
  title :'services',
  link:'/'
},
{
  id :3,
  title :'contact',
  link:'/'
},
{
  id :1,
  title :'tools',
  link:'/tools'
},
{
  id :1,
  title :'blogs',
  link:'/'
},
{
  id :1,
  title :'api',
  link:'/api'
},

]


const Headers = () => {
  return (
    <>
<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
        <Link to='/'> <img src={burger} alt="burger-picture" /> </Link>
      </div>
      <h1 class="text-2xl font-bold text-gray-800">Aagan Sewa</h1>
    </div>


    <nav class="hidden md:flex items-center gap-8">
      {
        menus.map(menu => <li><Link to={menu.link}>{menu.title}</Link></li>)
      }
    </nav>

    
    <div class="flex items-center gap-3">
      <button class="hidden sm:block px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
        Login
      </button>
      <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
        Get Started
      </button>
    </div>
  </div>
</header>
</>
  )
}

export default Headers
