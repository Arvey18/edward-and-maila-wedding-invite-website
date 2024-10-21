/* eslint-disable react/no-unescaped-entities */

// images
import Edward from '../../assets/images/edward.jpg';
import Maila from '../../assets/images/maila.jpg';

const CoupleInfo = () => {
  return (
    <div id='about-us' className='relative px-4'>
      <div className='mx-auto max-w-screen-2xl flex py-[80px] flex-col gap-10 items-center justify-center md:flex-row'>
        <div className='md:flex-1'>
          <div>
            <img className='mx-auto mb-[50px] w-[150px] rounded-full' src={Edward} alt='Edward' />
            <div className='text-[50px] text-center leading-none mb-[10px] min-h-[60px] w-full max-w-[215px] lg:max-w-full mx-auto font-haviland'>
              Edward Ross Masilang
            </div>
            <div className='text-center'>
              Visual artist. Businessman. Computer hobbyist.
              <br />
              Loves arts, sports, and cooking
              <br />
              "To love someone, is to love who they are. No matter what boundaries you both have."
            </div>
            <div className='mt-[25px] flex flex-row justify-center items-center'>
              <div className='cursor-pointer mx-[10px]'>
                <a
                  href='https://www.facebook.com/edwardrossmasilang'
                  className='bg-custom-darker-pink flex items-center justify-center rounded-full w-[30px] h-[30px]'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='14' width='8.75' viewBox='0 0 320 512'>
                    <path
                      d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
                      fill='#fff'
                    />
                  </svg>
                </a>
              </div>
              <div className='cursor-pointer mx-[10px]'>
                <a
                  href='https://www.instagram.com/edwardross24/?hl=en'
                  className='bg-custom-darker-pink flex items-center justify-center rounded-full w-[30px] h-[30px]'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='14' width='12.25' viewBox='0 0 448 512'>
                    <path
                      d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                      fill='#fff'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='relative shadow-2xl flex items-center justify-center rounded-full w-[70px] h-[70px] bg-custom-darker-pink'>
            <svg className='w-[30px] h-[30px]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path
                d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z'
                fill='#FFFFFF'
              />
            </svg>
          </div>
        </div>
        <div className='md:flex-1'>
          <div>
            <img className='mx-auto mb-[50px] w-[150px] rounded-full' src={Maila} alt='Maila' />
            <div className='text-[50px] text-center leading-none mb-[10px] min-h-[60px] w-full max-w-[215px] lg:max-w-full mx-auto font-haviland'>
              Maila Marañon
            </div>
            <div className='text-center'>
              Lawyer. Racer. Adventurer.
              <br />
              Loves food, sports, and the beach
              <br />
              "Love found me at the most unexpected time, proving that timing is simply destiny's plan"
            </div>
            <div className='mt-[25px] flex flex-row justify-center'>
              <div className='cursor-pointer mx-[10px]'>
                <a
                  className='bg-custom-darker-pink flex items-center justify-center rounded-full w-[30px] h-[30px]'
                  href='https://www.facebook.com/mailamaranon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='14' width='8.75' viewBox='0 0 320 512'>
                    <path
                      d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
                      fill='#fff'
                    />
                  </svg>
                </a>
              </div>
              <div className='cursor-pointer mx-[10px]'>
                <a
                  className='bg-custom-darker-pink flex items-center justify-center rounded-full w-[30px] h-[30px]'
                  href='https://www.instagram.com/mightymaila/?hl=en'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='14' width='12.25' viewBox='0 0 448 512'>
                    <path
                      d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                      fill='#fff'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleInfo;
