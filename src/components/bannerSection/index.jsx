// asssets
import BackgroundImageSample from '../../assets/images/banner-photo.jpg';

const BannerSection = () => {
  return (
    <div
      className='relative  px-[10px] bg-fixed bg-custom-gray bg-no-repeat bg-cover flex flex-col justify-center items-center bg-center h-svh w-[100%]'
      style={{
        backgroundImage: `url(${BackgroundImageSample})`,
      }}
    >
      <div className='absolute top-0 left-0 z-1 bg-black opacity-40 h-[100%] w-[100%]'></div>
      <div className='relative z-2 text-[80px] lg:text-[170px] md:text-[120px] text-center leading-[80px] lg:leading-[120px] md:leading-[100px] text-white font-haviland'>
        Edward{' '}
        <span className='block md:inline text-[40px] lg:text-[170px] md:text-[120px] leading-[40px] lg:leading-[120px] md:leading-[100px] font-allura text-custom-darker-pink'>
          &
        </span>{' '}
        Maila
      </div>
      <div className='relative text-center z-2 uppercase text-white font-medium'>
        🕒 November 30, 2024 - 2:30 pm <span className='hidden md:inline font-light'>|</span>{' '}
        <br className='block md:hidden' />
        📍 CIC CHURCH CHAPEL
      </div>
    </div>
  );
};

export default BannerSection;
