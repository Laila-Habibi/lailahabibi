'use client'
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


const About = () => {
  return (
    <div>
      
      <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>
                  Used to describe yourself in about page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='mb-6'>
                  <label className='font-semibold'>About</label>
                  <Input placeholder="Tell about yourself"/>
                  </div>

                  <div className='mb-6'>
                  <label className='font-semibold'>Images</label>
                  <Input
                   placeholder="Select your images"/>
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

export default About
