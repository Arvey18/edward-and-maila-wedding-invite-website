import { useEffect, useState } from 'react';

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
      className={`fixed h-[100px] z-[9999] transition-colors ease-linear ${
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
            <li className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'>About Us</li>
            <li className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'>Time</li>
            <li className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'>Event</li>
            <li className='inline uppercase cursor-pointer px-[20px] hover:text-custom-darker-pink'>Location</li>
            <li className='inline h-[100%] uppercase cursor-pointer px-[20px]'>
              <div className='inline-flex h-[100%] items-center px-[12px] bg-custom-darker-pink'>RSVP</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
