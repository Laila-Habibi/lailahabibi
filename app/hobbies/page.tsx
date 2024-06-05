import React from 'react';
import Image from 'next/image';


const Hobbies: React.FC = () => {
  return (
    <div className="container mx-auto py-14 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="description w-full lg:w-1/2 pr-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Hobbies</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Baking</h3>
    
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Cooking</h3>
    
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Reading Books</h3>
    
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Coding</h3>
    
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Family and Friends meeting</h3>
    
          </div>
         
         
        </div>
      </div>

      <div className="images w-full lg:w-1/2 mt-12 lg:mt-0 ">
      
        <div className="grid grid-cols-2 gap-6">
          
            <img
            src="/images/book3.webp"
            alt="Team Member 1"
            className="rounded-lg shadow-md h-64 w-60"
          />
            <img
            src="/images/cake.jpg"
            alt="Team Member 2"
            className="rounded-lg shadow-md h-64 w-60"
          />
        
             <img
            src="/images/polow.jpg"
            alt="Team Member 2"
            className="rounded-lg shadow-md w-60"
          />

          <img
            src="/images/book2.webp"
            alt="Team Member 3"
            className="rounded-lg shadow-md h-64 w-60"
          />
         
         
        
        
         
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
