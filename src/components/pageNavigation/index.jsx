import { useEffect, useState } from 'react';
import scrollToSection from '../../utils/scrollToSection';

const PageNavigation = () => {
  const [scrolling, setScrolling] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[80px] z-[9999] transition-colors ease-linear ${
        scrolling ? 'bg-custom-black shadow ' : 'bg-transparent '
      } overflow-hidden top-0 left-0 w-[100%] flex flex-col items-centers px-4`}
    >
      <div className='relative h-[100%] m-auto w-[100%] max-w-screen-2xl flex flex-row items-center'>
        <div className='flex-1'>
          <div className='relative cursor-pointer text-[36px] leading-[40px] text-white font-haviland'>
            Edward <span className='font-allura text-custom-darker-pink'>&</span> Maila
          </div>
        </div>
        <div className='flex h-[100%] items-center'>
          <ul className='text-white h-[100%] flex items-center'>
            <li
              onClick={() => scrollToSection('about-us')}
              className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'
            >
              About Us
            </li>
            <li
              onClick={() => scrollToSection('event')}
              className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'
            >
              Time
            </li>
            <li
              onClick={() => scrollToSection('location')}
              className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'
            >
              Location
            </li>
            <li
              onClick={() => scrollToSection('details')}
              className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'
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
  );
};

export default PageNavigation;
