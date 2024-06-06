import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Contact = () => {
  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                The Messages you received.
              </CardDescription>
            </CardHeader>
            <CardContent>
             <Card>
              <CardContent className='py-4 flex flex-col gap-2'>
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Company: </p>
                <p>Email: </p>
                <p>Phone Number: </p>
                <p>Message: </p>
              </CardContent>
             </Card>
            </CardContent>
          
          </Card>
    </div>
  )
}

export default Contact
