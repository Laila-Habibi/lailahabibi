import React from 'react';
import Image from 'next/image';
const AboutMe: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-12 sm:py-20">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
            <Image
              src="/images/me2.png"
              height={400}
              width={400}
              alt="Profile Picture"
              className=' scale-x-[-1]'
            />
          </div>
          <div className=' flex flex-col justify-center'>
            <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            </div>
            <div>
            <p className="text-gray-700 mb-6">
              As a front-end web developer and UI/UX designer,
               I am passionate about creating visually stunning
                and highly intuitive digital experiences. With 
                a keen eye for detail and a deep understanding
                 of responsive design, I transform complex ideas
                  into seamless, user-centric interfaces.
            </p>
            </div>
            <div className="mt-5 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                See Projects <span aria-hidden="true">→</span>
              </a>
            </div>
           
          
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutMe;