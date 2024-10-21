import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PlayerCard = ({ image, level, username, color, className }) => (
  <div className={`rounded-lg overflow-hidden relative ${className}`}>
    <img src={image} alt={username} className="w-full h-full object-cover" />
    <div className="absolute top-2 left-2 bg-black bg-opacity-0 px-2 py-1 rounded">
      <span className="text-white text-xs font-bold flex justify-center ml-40">LEVEL</span>
      {/* <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png" alt="Level" className="inline-block ml-1 w-5 h-5" /> */}
    </div>
    <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-0 px-2 py-1 rounded ml-40">
      <span className="text-white text-sm font-bold">{username}</span>
    </div>
  </div>
)

export default function LobbyPage() {
  const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD']
  const players = [
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'pink' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'blue' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'green' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'purple' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'orange' },
  ]

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="relative z-10 p-4">
        <Link to='/' className="bg-black inline-block rounded p-1">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-26 w-40 object-contain"
          />
        </Link>
        <nav className="flex justify-center space-x-4 mb-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center text-sm font-bold hover:bg-red-700 transition-colors duration-200"
            >
              {item}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          ))}
        </nav>
        <div className="relative max-w-3xl mx-auto">
          <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png" alt="Central Character" className="mx-auto w-1/2" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-12 gap-4 w-full h-full">
              <PlayerCard {...players[0]} className="col-span-4 row-span-2 z-10" />
              <PlayerCard {...players[1]} className="col-start-3 col-span-4 row-start-2 row-span-2 z-20" />
              <PlayerCard {...players[2]} className="col-start-5 col-span-4 row-start-3 row-span-2 z-30" />
              <PlayerCard {...players[3]} className="col-start-7 col-span-4 row-start-2 row-span-2 z-20" />
              <PlayerCard {...players[4]} className="col-start-9 col-span-4 row-span-2 z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}