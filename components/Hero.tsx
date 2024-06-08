
'use client'

export default function Hero() {
  return (
    <div className="bg-white">
      

      <div className="relative isolate px-6 pt-6 lg:px-8">
      
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Front-end developer and UI/UX designer.{' '}
              <a href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Know More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hello!<img src='/images/wave.png' className='h-10 w-10 inline'/>      I am Laila Habibi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            As a front-end web developer and UI/UX designer,
             I craft visually captivating and user-friendly 
             digital experiences. My portfolio showcases projects
              that blend technical expertise with a human-centered design approach.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/Resume.pdf"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"

                  download="cv.pdf"
              >
                Download CV
              </a>
              <a href="/projectss" className="text-sm font-semibold leading-6 text-gray-900">
                See Projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        
        </div>
      
      </div>
    </div>
  )
}

