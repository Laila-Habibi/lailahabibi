import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Project = () => {
  return (
       <div>
      <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                Used to describe the projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className='mb-6'>
                <label className='font-semibold'>Name</label>
                <Input placeholder="The name of your project"/>
                </div>

                <div className='mb-6'>
                <label className='font-semibold'>Description</label>
                <Input
                 placeholder="Describe your project"/>
                </div>
                <div className='mb-6'>
                <label className='font-semibold'>Image</label>
                <Input
                 placeholder="Upload the picture of your project"/>
                </div>
             
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
    </div>
  
  )
}

export default Project
