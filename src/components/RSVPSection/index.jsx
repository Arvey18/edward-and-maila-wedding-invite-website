import CustomDropdown from '../customDropdown';

import CoupleImage from '../../assets/images/couple.jpg';

const RSVPSection = () => {
  return (
    <div className='relative pt-[410px] pb-[80px] px-4 bg-custom-gray'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='absolute top-[-260px] left-[50%] translate-x-[-50%] w-full flex justify-center'>
          <img src={CoupleImage} className='w-[900px]' alt='couple-photo' />
        </div>
        <div className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative bg-transparent text-[70px] px-[25px] z-20 font-haviland'>Are You Attending?</div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='relative m-auto text-center max-w-[580px] px-4 mt-[40px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </div>

        <div className='bg-white mt-[60px] shadow relative w-[745px] mx-auto p-[50px] flex flex-col gap-5'>
          <div className='flex flex-row gap-5'>
            <div className='flex-1'>
              <input
                id='firstname'
                name='firstname'
                type='text'
                placeholder='Firstname'
                className='placeholder:text-custom-black text-[16px] outline-none w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black'
              />
            </div>
            <div className='flex-1'>
              <input
                id='lastname'
                name='lastname'
                type='text'
                placeholder='Lastname'
                className='text-[16px] outline-none w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black placeholder:text-custom-black'
              />
            </div>
          </div>
          <div>
            <CustomDropdown
              placeholder='Are you attending'
              data={['Yes, I am attending', 'No, I am not attending']}
              key='guests-attending-dropdown'
            />
          </div>

          <div>
            <CustomDropdown placeholder='How many guests?' data={[1, 2, 3, 4, 5, 'Only Me']} key='attending-dropdown' />
          </div>
          <div>
            <textarea
              className='text-[16px] outline-none min-h-[120px] w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black placeholder:text-custom-black'
              placeholder='Message'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPSection;
