import React from 'react'

const Courses = () => {
  return (
    <div>
       <div className="container mx-auto py-14 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="description w-full pr-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Courses</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4"> Certificate Of Graphic Design</h3>
            <p className="text-gray-700 mb-2">Graphic Design</p>
            <p className="text-gray-500">
              Khatamulnabieen Professional Learning Center
              <br />
              2022
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Certificate Of Motion Graphic</h3>
            <p className="text-gray-700 mb-2">Motion Graphics</p>
            <p className="text-gray-500">
            Khatamulnabieen Professional Learning Center
              <br />
              2022
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Certificate Of Achievement</h3>
            <p className="text-gray-700 mb-2">Coding Competition</p>
            <p className="text-gray-500">
            The 2020 ICPC Asia Kabul Regional Contest
              <br />
              12 August - 13 August 2021
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Certificate Of Web Development</h3>
            <p className="text-gray-700 mb-2">Web Development</p>
            <p className="text-gray-500">
            Global Links
              <br />
              2020
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Certificate Of Completion</h3>
            <p className="text-gray-700 mb-2">Public Speaking</p>
            <p className="text-gray-500">
            Kabul University
              <br />
              April 2019
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Certificate Of Completion</h3>
            <p className="text-gray-700 mb-2">Enterpreneurship Program</p>
            <p className="text-gray-500">
            Tashabos Educational Organization
              <br />
              2017
            </p>
          </div>
        </div>
      </div>

    
    </div>
    </div>
  )
}

export default Courses
