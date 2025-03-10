

import { useState, useRef, useEffect } from 'react'


export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target ) || trigger.current.contains(target )) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
       
            <ul className="flex flex-col bg-white grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#home"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-medium text-[#0A6F9D] hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
      
    </div>
  )
}
