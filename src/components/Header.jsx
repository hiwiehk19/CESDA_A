
import MobileMenu from './mobile-menu'

import logo from '../assets/SVG.svg'

export default function Header() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-20 px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            
             <img src={logo} alt='CESDA'
                     width={220}
                     height={220}
              />
          
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
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

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
