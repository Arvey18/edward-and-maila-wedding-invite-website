import { useState, useEffect } from 'react';

const EventTimeSection = () => {
  const targetDate = new Date('2024-11-30T14:30:00'); // Target date and time
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Initialize state

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      // Calculate remaining time components
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // If countdown is finished
      if (difference < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Removed targetDate from dependencies

  // Helper function to format numbers as double digits
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div
      id='event'
      className='relative pt-[80px] pb-[290px] xs:pb-[340px] px-4 bg-white bg-cover bg-no-repeat bg-center'
    >
      <div className='mx-auto max-w-screen-2xl'>
        <div className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative overflow-visible text-center bg-transparent text-[50px] md:text-[70px] px-[0px] md:px-[25px] z-20 font-haviland w-full'>
            Time left until Event
          </div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='max-w-screen-lg mx-auto flex flex-row mt-[40px]'>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>{formatNumber(timeLeft.days)}</div>
            <div className='font-light'>Days</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>{formatNumber(timeLeft.hours)}</div>
            <div className='font-light'>HRS</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>{formatNumber(timeLeft.minutes)}</div>
            <div className='font-light'>Minutes</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>{formatNumber(timeLeft.seconds)}</div>
            <div className='font-light'>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeSection;
