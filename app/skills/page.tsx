import React from 'react'
import { Progress } from "@/components/ui/progress"


const Skills = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row max-w-screen-lg px-4 sm:px-6 lg:px-8 gap-8">
    <div className="description w-full lg:w-1/2 pr-8 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6">Soft Skills</h1>
       <div className='py-2'>
        <p>HTML</p>
        <Progress value={70}/>
       </div>
       <div className='py-2'>
        <p>CSS</p>
        <Progress value={60}/>
       </div>
       <div className='py-2'>
        <p>Java Script</p>
        <Progress value={50}/>
       </div>
       <div className='py-2'>
        <p>React.js</p>
        <Progress value={70}/>
       </div>
       <div className='py-2'>
        <p>Next.js</p>
        <Progress value={80}/>
       </div>
       <div className='py-2'>
        <p>Figma</p>
        <Progress value={90}/>
       </div>
       <div className='py-2'>
        <p>Adobe XD</p>
        <Progress value={95}/>
       </div>
       <div className='py-2'>
        <p>Adobe Photoshop</p>
        <Progress value={50}/>
       </div>
       <div className='py-2'>
        <p>Adobe Illustrator</p>
        <Progress value={70}/>
       </div>
       <div className='py-2'>
        <p>Adobe Premiere</p>
        <Progress value={50}/>
       </div>
       <div className='py-2'>
        <p>Adobe After Effect</p>
        <Progress value={62}/>
       </div>
       <div className='py-2'>
        <p>Adobe InDesign</p>
        <Progress value={30}/>
       </div>
      
      
    </div>

    <div className="description w-full lg:w-1/2 pr-8">
      <h1 className="text-4xl font-bold mb-6">Hard Skills</h1>
      <div className='py-2'>
        <p>Public Speaking</p>
        <Progress value={60}/>
       </div>
       <div className='py-2'>
        <p>Project Management</p>
        <Progress value={62}/>
       </div>
       <div className='py-2'>
        <p>Teamwork</p>
        <Progress value={80}/>
       </div>
       <div className='py-2'>
        <p>Time Management</p>
        <Progress value={88}/>
       </div>
    </div>

   
  </div>
  )
}

export default Skills

