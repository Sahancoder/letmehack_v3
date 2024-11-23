import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Register() {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-black text-white flex px-8 justify-between">
      <div className="h-full">
        <Image src={logo} alt="Let Me Hack" width={90} height={50} priority/>
      </div>
        <ul className="flex space-x-6 items-center">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Gallery</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
        </ul>
      </nav>

      {/* Form */}
      <div className="bg-black w-full max-w-lg p-8 m-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Register Here</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Member1 Name</label>
            <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">University</label>
            <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" placeholder="example@gmail.com" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">NIC</label>
            <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">WhatsApp Contact Number</label>
            <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">Degree Program</label>
            <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">Academic Year</label>
            <div className="space-y-2">
              <div>
                <input type="radio" name="academic_year" id="year1" className="mr-2" />
                <label htmlFor="year1">1st Year</label>
              </div>
              <div>
                <input type="radio" name="academic_year" id="year2" className="mr-2" />
                <label htmlFor="year2">2nd Year</label>
              </div>
              <div>
                <input type="radio" name="academic_year" id="year3" className="mr-2" />
                <label htmlFor="year3">3rd Year</label>
              </div>
              <div>
                <input type="radio" name="academic_year" id="year4" className="mr-2" />
                <label htmlFor="year4">4th Year</label>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-neutral-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>        </form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white text-center py-4 mt-auto">
        <div className="text-sm">
          <p>Let Me Hack ECO V3.0</p>
          <p>Copyright © 2024 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

