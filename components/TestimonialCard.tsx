import React from 'react'
import testimonials from './data/TestimonialsData'
import { Testimonial } from './data/TestimonialsData';

interface TestimonialCardProps {
    testimonial: Testimonial;
  }


const TestimonialCard: React.FC<TestimonialCardProps> = ({testimonial}) => {
  return (
    <div>
       <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
          
        
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                {testimonial.text}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src= {testimonial.authorImage}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{testimonial.authorName}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">{testimonial.authorTitle}</div>
              </div>
            </figcaption>
          </figure>
        </div>
    </div>
  )
}

export default TestimonialCard
