import React from "react"
import testimonials from "./data/TestimonialsData"
import { Testimonial } from "./data/TestimonialsData"
import TestimonialCard from "./TestimonialCard"

import Swiper from 'swiper';
import 'swiper/css';


export default function TestimonialPage() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div>
       
        </div>
        <div>  <h1 className="font-bold text-center text-3xl">Happy Clients</h1> </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left
         skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50
         sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        {testimonials.map((testimonial: Testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
        ))}
      </section>
    )
  }
  