import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <div className="description w-full lg:w-1/2 pr-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-gray-700 leading-relaxed mb-8">
        I was born and raised in Kabul, Afghanistan, where I attended Rukhshanah High School. My passion for technology led me to study Computer Science at Kabul University, and I developed a particular interest in the field of technology.
       <br/><br/>
After graduating, I have had the opportunity to work on a variety of projects, driven by a desire to push the boundaries of what is possible with technology.
<br/> <br/> In my free time, I enjoy staying up-to-date with the latest advancements in AI and experimenting with new techniques and technologies.
   <br/><br/>
I am excited to continue my journey in the world of technology and to use my skills to make a positive impact. If you would like to learn more about my work, please do not hesitate to get in touch.
        </p>
      
      </div>

      <div className="images w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center">
      
        <div className="grid grid-cols-2 gap-6">
            <div className='flex flex-col gap-6'>
            <img
            src="/images/1.jpeg"
            alt="Team Member 1"
            className="rounded-lg shadow-md h-3/5"
          />

<img
            src="/images/13.jpeg"
            alt="Team Member 3"
            className="rounded-lg shadow-md h-2/5"
          />
            </div>

            <div className='flex flex-col gap-6'>
            <img
            src="/images/8.jpeg"
            alt="Team Member 2"
            className="rounded-lg shadow-md h-2/5"
          />
             <img
            src="/images/2.jpeg"
            alt="Team Member 2"
            className="rounded-lg shadow-md h-3/5"
          />
            </div>
         
        
        
         
        </div>
      </div>
    </div>
  );
};

export default AboutPage;