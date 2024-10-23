/* eslint-disable no-undef */
import { useEffect } from 'react';

const PageLoader = () => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml16');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }, []);

  return (
    <div className='fixed z-[9999] w-[100%] h-[100%] bg-custom-darker-pink flex flex-col items-center justify-center'>
      <h1 className='ml16 text-white text-center'>Made with love</h1>
      <h2 className='text-white font-normal italic'>
        #<span className='font-bold'>MAI</span>p<span className='font-bold'>ER</span>fectmatch
      </h2>
    </div>
  );
};

export default PageLoader;
