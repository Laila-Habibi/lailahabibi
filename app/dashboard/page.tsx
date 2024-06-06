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



const DashboardHome = () => {
  return (
  <div className='py-4'>
   <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Used to identify your profile in the marketplace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='mb-6'>
                  <label className='font-semibold'>Introduction</label>
                  <Input placeholder="Introduction"/>
                  </div>
                  <div className='mb-6'>
                  <label className='font-semibold'>Description</label>
                  <Input placeholder="Description to your introduction"/>
                  </div>
                  <div className='mb-6'>
                  <label className='font-semibold'>CV</label>
                  <Input placeholder="Upload your CV"/>
                  </div>
                
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

     {/******************  About section **********************/}

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>
                  Used to describe yourself.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className='mb-6'>
                  <label className='font-semibold'>About</label>
                  <Input placeholder="Tell about yourself"/>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          
          </div>
  </div>
  )
}

export default DashboardHome
