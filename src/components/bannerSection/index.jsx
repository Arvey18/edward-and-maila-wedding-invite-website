// asssets
import BackgroundImageSample from '../../assets/images/background-image-example-3.jpg';

const BannerSection = () => {
  return (
    <div
      className='relative bg-fixed bg-custom-gray bg-no-repeat bg-cover flex flex-col justify-center items-center bg-center h-svh w-[100%]'
      style={{
        backgroundImage: `url(${BackgroundImageSample})`,
      }}
    >
      <div className='absolute top-0 left-0 z-1 bg-black opacity-50 h-[100%] w-[100%]'></div>
      <div className='relative z-2 text-[170px] leading-[120px] text-white font-haviland'>
        Edward <span className='font-allura text-custom-darker-pink'>&</span> Maila
      </div>
      <div className='relative z-2 uppercase text-white font-medium'>
        November 30, 2024 - 4:00pm <span className='font-light'>|</span> CIC CHURCH
      </div>
    </div>
  );
};

export default BannerSection;
