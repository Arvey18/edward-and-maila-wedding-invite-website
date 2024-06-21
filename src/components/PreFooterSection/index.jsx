const PreFooter = () => {
  return (
    <div className='bg-custom-black py-[80px] px-4 w-full'>
      <div className='mx-auto max-w-screen-2xl flex flex-row gap-5'>
        <div className='flex-1'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Wedding Colors</div>
          <div className='text-white max-w-[300px] mb-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </div>
          <div className='flex flex-row gap-5'>
            <div className='rounded-full w-[30px] h-[30px] bg-custom-pink'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-custom-darker-pink'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-custom-maroon'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-white'></div>
          </div>
        </div>
        <div className='flex-1 text-center'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Share the Love!</div>
          <div className='text-white max-w-[300px] mb-[20px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </div>
          <div className='text-white font-bold'>
            #EMLoveForever
            <br />
            #EdwardLoveMaila
            <br />
            #ForeverEdwardAndMaila
          </div>
        </div>
        <div className='flex-1 text-right'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Couple Contact Info</div>
          <div className='text-white max-w-[300px] ml-auto mb-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </div>
          <div className='mb-[15px] text-white'>
            Edward:
            <br />
            0912-3244-212
          </div>
          <div className='text-white'>
            Maila:
            <br />
            0943-3734-821
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
