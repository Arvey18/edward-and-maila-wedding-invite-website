import { useEffect, useState } from 'react';
import scrollToSection from '../../utils/scrollToSection';

const PageNavigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onScroll = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    const headerHeight = 80;
    const sections = ['about-us', 'event', 'location', 'details'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          currentSection = section;
        }
      }
    });

    // Special case: If at the bottom of the page, activate the last section ("Details")
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      currentSection = 'details';
    }

    setActiveSection(currentSection);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  console.log(activeSection, 'active section');

  return (
    <>
      <div
        className={`fixed h-[60px] md:h-[80px] z-[99] transition-colors ease-linear ${
          scrolling ? 'bg-custom-black shadow ' : 'bg-transparent '
        } overflow-hidden top-0 left-0 w-[100%] flex flex-col items-centers px-0 md:px-4`}
      >
        <div className='relative h-[100%] m-auto w-[100%] max-w-screen-2xl flex flex-row items-center'>
          <div className='block md:hidden'>
            <button
              className='flex items-center justify-center w-10 h-10 text-gray-800 focus:outline-none'
              onClick={toggleMenu}
            >
              {/* SVG Icon with lines starting from the left */}
              <svg className='w-6 h-6' fill='none' stroke='#FFF' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
          <div className='flex-1'>
            <div
              onClick={scrollToTop}
              className='relative cursor-pointer mt-[8px] text-[26px] leading-[30px] md:text-[36px] md:leading-[40px] text-white font-haviland'
            >
              Edward <span className='font-allura text-custom-darker-pink'>&</span> Maila
            </div>
          </div>
          <div className='flex h-[100%] items-center'>
            <ul className='text-white h-[100%] flex items-center'>
              <li
                onClick={() => scrollToSection('about-us')}
                className={`hidden md:inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink ${
                  activeSection === 'about-us' ? 'text-custom-darker-pink' : ''
                }`}
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection('event')}
                className={`hidden md:inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink ${
                  activeSection === 'event' ? 'text-custom-darker-pink' : ''
                }`}
              >
                Time
              </li>
              <li
                onClick={() => scrollToSection('location')}
                className={`hidden md:inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink ${
                  activeSection === 'location' ? 'text-custom-darker-pink' : ''
                }`}
              >
                Location
              </li>
              <li
                onClick={() => scrollToSection('details')}
                className={`hidden md:inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink ${
                  activeSection === 'details' ? 'text-custom-darker-pink' : ''
                }`}
              >
                Details
              </li>
              <li className='inline h-[100%] uppercase cursor-pointer pl-[20px]'>
                <div
                  onClick={() => scrollToSection('rsvp')}
                  className='inline-flex h-[100%] items-center px-[12px] bg-custom-darker-pink'
                >
                  RSVP
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed block md:hidden inset-0 z-[999] bg-black bg-opacity-40 transition-opacity duration-300'
          onClick={toggleMenu} // Clicking outside the menu closes it
        ></div>
      )}

      <div
        className={`fixed block md:hidden z-[9999] top-0 left-0 h-full w-64 bg-custom-black shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button className='absolute top-4 right-4' onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#FFF'
            strokeWidth='2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <ul className='mt-12 space-y-4 p-4'>
          <li
            className={`block hover:text-custom-darker-pink ${
              activeSection === 'about-us' ? 'text-custom-darker-pink' : 'text-white'
            }`}
            onClick={() => {
              scrollToSection('about-us');
              toggleMenu();
            }}
          >
            About Us
          </li>
          <li
            className={`block hover:text-custom-darker-pink ${
              activeSection === 'event' ? 'text-custom-darker-pink' : 'text-white'
            }`}
            onClick={() => {
              scrollToSection('event');
              toggleMenu();
            }}
          >
            Time
          </li>
          <li
            className={`block hover:text-custom-darker-pink ${
              activeSection === 'location' ? 'text-custom-darker-pink' : 'text-white'
            }`}
            onClick={() => {
              scrollToSection('location');
              toggleMenu();
            }}
          >
            Location
          </li>
          <li
            className={`block hover:text-custom-darker-pink ${
              activeSection === 'details' ? 'text-custom-darker-pink' : 'text-white'
            }`}
            onClick={() => {
              scrollToSection('details');
              toggleMenu();
            }}
          >
            Details
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageNavigation;
