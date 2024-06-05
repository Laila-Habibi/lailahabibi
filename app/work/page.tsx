import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <div className="container mx-auto py-14 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="description w-full lg:w-1/2 pr-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Web Designer, UI/UX Designer</h3>
            <p className="text-gray-500">
              Smart City Solution ICT
              <br />
               2023 - 2024
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">UI/UX Designer</h3>
            <p className="text-gray-500">
              Umbel Stock
              <br />
              2022 - 2023
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">English Instructor</h3>
            <p className="text-gray-500">
              Bamdad Educational Center
              <br />
              2017 - 2020
            </p>
          </div>
        </div>
      </div>

      <div className="images w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center ">
      
      <div className="grid grid-cols-2 gap-6">
          <div className='flex flex-col gap-6'>
          <img
          src="/images/12.jpeg"
          alt="Team Member 1"
          className="rounded-lg shadow-md h-3/5"
        />

<img
          src="/images/10.jpeg"
          alt="Team Member 3"
          className="rounded-lg shadow-md h-2/5"
        />
          </div>

          <div className='flex flex-col gap-6'>
          <img
          src="/images/9.jpeg"
          alt="Team Member 2"
          className="rounded-lg shadow-md"
        />
           <img
          src="/images/14.jpeg"
          alt="Team Member 2"
          className="rounded-lg shadow-md"
        />
          </div>
       
      
      
       
      </div>
    </div>
    </div>
  );
};

export default WorkExperience;