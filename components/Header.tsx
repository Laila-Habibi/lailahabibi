'use client'
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
          
            <h1 className='font-bold text-xl flex flex-col justify-center'>Laila Habibi</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        
          
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
                About me
              </a>
          <a href="/education" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
               Education
          </a>
          <a href="courses" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Courses
          </a>
          <a href="/work" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Work Experience
          </a>
          <a href="skills" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Skills
          </a>
          <a href="/projectss" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Projects
          </a>
          <a href="/hobbies" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Hobbies
          </a>
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:underline hover:text-indigo-600 transition-transform duration-300 hover:translate-y-[-20%]">
              Contact
          </a>
        </PopoverGroup>
       
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only font-bold text-xl flex flex-col justify-center">Laila Habibi</span>
             
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About me
                </a>
                <a
                  href="/education"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Education
                </a>
                <a
                  href="courses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Courses
                </a>
                <a
                  href="/work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Work Experience
                </a>
                <a
                  href="skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Skills
                </a>
                <a
                  href="projectss"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="/hobbies"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hobbies
                </a>
                <a
                  href="contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
             
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
