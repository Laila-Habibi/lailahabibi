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

const Courses = () => {
  return (
    <div>
        <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Courses</CardTitle>
              <CardDescription>
                Used to describe the courses you took.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className='mb-6'>
                <label className='font-semibold'>Name of Certificate</label>
                <Input placeholder="The Degree you achieved"/>
                </div>

                <div className='mb-6'>
                <label className='font-semibold'>Field</label>
                <Input
                 placeholder="Field of your study"/>
                </div>
                <div className='mb-6'>
                <label className='font-semibold'>Educational Center</label>
                <Input
                 placeholder="The name of educational center"/>
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

export default Courses
