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


const Skills = () => {
  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>
                Used to describe your skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className='mb-6'>
                <label className='font-semibold'>Position</label>
                <Input placeholder="The position you had"/>
                </div>

                <div className='mb-6'>
                <label className='font-semibold'>Company</label>
                <Input
                 placeholder="Field of your study"/>
                </div>
                <div className='mb-6'>
                <label className='font-semibold'>From</label>
                <Input
                 placeholder="The date you started the course"/>
                </div>
                <div className='mb-6'>
                <label className='font-semibold'>To</label>
                <Input
                 placeholder="The date you ended the course"/>
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

export default Skills
