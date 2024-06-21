const EventTimeSection = () => {
  return (
    <div className='relative pt-[80px] pb-[340px] px-4 bg-white bg-cover bg-no-repeat bg-center'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative bg-transparent text-[70px] px-[25px] z-20 font-haviland'>Time left until Event</div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='max-w-screen-lg mx-auto flex flex-row mt-[40px]'>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>240</div>
            <div className='font-light'>Days</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>322</div>
            <div className='font-light'>HRS</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>60</div>
            <div className='font-light'>Minutes</div>
          </div>
          <div className='flex-1 text-center'>
            <div className='text-[50px] font-medium'>34</div>
            <div className='font-light'>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeSection;
