import GoogleMapsView from '../googleMaps';

import LeavesPattern from '../../assets/images/leaves-pattern.png';

/* eslint-disable react/no-unescaped-entities */
const LocationSection = () => {
  return (
    <>
      <div
        className='relative bg-fixed bg-custom-gray pt-[80px] pb-[260px] bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${LeavesPattern})` }}
      >
        <div className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative bg-transparent text-[70px] px-[25px] z-20 font-haviland'>You are Invited</div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='relative m-auto text-center max-w-[680px] px-4 mt-[40px]'>
          We are very happy to announce that you're invited in our wedding. Your appearance will add happines to our
          wedding as you're one of the most important persons in our life. Please let us know if you can make it.
        </div>
        <div className='flex justify-center mt-[15px]'>
          <div className='relative shadow mx-auto mt-[15px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[25px]'>
            RSVP
          </div>
        </div>
      </div>

      <div className='relative flex flex-row'>
        <div className='google-map-view flex-1 border-r-[1px] border-custom-darker-pink h-[550px]'>
          <GoogleMapsView lat={15.455404734394337} lng={120.9529948410017} />
        </div>
        <div className='google-map-view flex-1 border-l-[1px] border-custom-darker-pink h-[550px]'>
          <GoogleMapsView lat={15.46814248249213} lng={120.94601886155961} />
        </div>
        <div className='absolute shadow top-[-180px] flex flex-row left-[50%] translate-x-[-50%] bg-white'>
          <div className='w-[600px] text-center border-r-[1px] border-custom-darker-pink flex-1 p-[80px] flex justify-center items-center'>
            <div>
              <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Ceremony</div>
              <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
              <div className='text-[14px] mb-[20px]'>
                Saturday, 30 November 2021
                <br />
                03:00 PM - 04:00 PM
                <br />
                CIC Church Chapel, Cabanatuan City
              </div>
              <a
                href='https://maps.app.goo.gl/fpByHdqxhDuoNeZZ7'
                target='_blank'
                className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[8px] px-[16px]'
                rel='noreferrer'
              >
                View on Map
              </a>
            </div>
          </div>

          <div className='w-[600px] text-center border-l-[1px] border-custom-darker-pink flex-1 p-[80px] flex justify-center items-center'>
            <div>
              <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Reception</div>
              <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
              <div className='text-[14px] mb-[20px]'>
                Saturday, 30 November 2021
                <br />
                04:00 PM - 08:00 PM
                <br />
                La Benue Center for Events, Cabanatuan City
              </div>

              <a
                href='https://maps.app.goo.gl/fpByHdqxhDuoNeZZ7'
                target='_blank'
                className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[8px] px-[16px]'
                rel='noreferrer'
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSection;
