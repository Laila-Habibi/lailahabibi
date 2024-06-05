import React from 'react';

const EducationPage: React.FC = () => {
  return (
    <div className="container mx-auto py-14 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="description w-full lg:w-1/2 pr-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Education</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Bacheloria</h3>
            <p className="text-gray-700 mb-2">General</p>
            <p className="text-gray-500">
              Rukhshah High School
              <br />
              2006 - 2017
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Bachelor of Computer Science</h3>
            <p className="text-gray-700 mb-2">Software Engineering</p>
            <p className="text-gray-500">
              Kabul University
              <br />
              2018 - 2022
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Diploma and Certification</h3>
            <p className="text-gray-700 mb-2">English Language</p>
            <p className="text-gray-500">
              Start Educational Society
              <br />
              2018 - 2020
            </p>
          </div>
        </div>
      </div>

      <div className="images w-full lg:w-1/2 mt-12 lg:mt-0 ">
      
        <div className="grid grid-cols-2 gap-6">
          
            <img
            src="/images/5.jpeg"
            alt="Team Member 1"
            className="rounded-lg shadow-md"
          />
            <img
            src="/images/3.jpeg"
            alt="Team Member 2"
            className="rounded-lg shadow-md"
          />
        
             <img
            src="/images/2.jpeg"
            alt="Team Member 2"
            className="rounded-lg shadow-md"
          />

<img
            src="/images/7.jpeg"
            alt="Team Member 3"
            className="rounded-lg shadow-md"
          />
         
         
        
        
         
        </div>
      </div>
    </div>
  );
};

export default EducationPage;