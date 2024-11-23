import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <>
      <nav className="w-full bg-black text-white py-4 flex justify-between px-8">
        <div className="text-2xl font-bold">Let Me Hack</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="#" className="hover:text-gray-400">Gallery</Link></li>
          <li><Link href="#" className="hover:text-gray-400">Contact</Link></li>
          <li><Link href="#" className="hover:text-gray-400">About</Link></li>
          <li><Link href="#" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/register" className="hover:text-gray-400">Register</Link></li>
        </ul>
      </nav>
      </>
  )
}

export default Navigation
