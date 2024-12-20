// import GoogleMapsView from '../googleMaps';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import scrollToSection from '../../utils/scrollToSection';

import LeavesPattern from '../../assets/images/leaves-pattern.png';
import MapMarker from '../../assets/images/map-marker.png';
import 'leaflet/dist/leaflet.css';

/* eslint-disable react/no-unescaped-entities */
const LocationSection = () => {
  const chuchPosition = [15.455434108077224, 120.95299273971929];
  const receptionPosition = [15.468142833564718, 120.94582556914999];

  const CustomIcon = new L.Icon({
    iconUrl: MapMarker,
    iconSize: [35, 55],
  });

  return (
    <>
      <div
        id='location'
        className='relative bg-custom-gray pt-[80px] pb-[80px] md:pb-[260px] bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${LeavesPattern})` }}
      >
        <div className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative overflow-visible text-center bg-transparent text-[50px] md:text-[70px] px-[0px] md:px-[25px] z-20 font-haviland w-full'>
            You are Invited
          </div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='relative m-auto text-center max-w-[680px] px-4 mt-[40px]'>
          We are delighted to let you know that you’re invited on our wedding day. Your presence will add splendor to
          our precious moments. Please let us know if you can make it and be one of our special guests.
        </div>
        <div className='flex justify-center mt-[15px]'>
          <div
            onClick={() => scrollToSection('rsvp')}
            className='relative shadow mx-auto mt-[15px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[25px]'
          >
            RSVP
          </div>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row'>
        <div className='relative flex w-full text-center border-b-[1px] bg-white border-custom-darker-pink flex-1 p-[80px] md:hidden justify-center items-center'>
          <div>
            <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Ceremony</div>
            <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
            <div className='text-[14px] mb-[20px]'>
              Saturday, 30 November 2024
              <br />
              02:30 PM
              <br />
              Immaculate Conception Chapel, CIC New Site,
              <br /> Cabanatuan City
            </div>
            <a
              href='https://maps.app.goo.gl/fpByHdqxhDuoNeZZ7'
              target='_blank'
              className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[16px]'
              rel='noreferrer'
            >
              View on Map
            </a>
          </div>
        </div>
        <div className='relative z-0 overflow-hidden md:flex-1 border-r-[1px] border-custom-darker-pink h-[550px]'>
          <MapContainer center={chuchPosition} zoom={17} scrollWheelZoom={false} className='h-full'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={chuchPosition} icon={CustomIcon}></Marker>
          </MapContainer>
        </div>
        <div className='relative flex w-full text-center border-b-[1px] bg-white border-custom-darker-pink flex-1 p-[80px] md:hidden justify-center items-center'>
          <div>
            <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Reception</div>
            <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
            <div className='text-[14px] mb-[20px]'>
              Saturday, 30 November 2024
              <br />
              After Wedding Ceremony
              <br />
              La Benue Center for Events,
              <br /> Cabanatuan City
            </div>

            <a
              href='https://maps.app.goo.gl/dMKLUCZ6Hxqygefr6'
              target='_blank'
              className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[16px]'
              rel='noreferrer'
            >
              View on Map
            </a>
          </div>
        </div>
        <div className='relative z-0 overflow-hidden md:flex-1 border-l-[1px] border-custom-darker-pink h-[550px]'>
          <MapContainer
            id='reception-map'
            center={receptionPosition}
            zoom={17}
            scrollWheelZoom={false}
            className='h-full'
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={receptionPosition} icon={CustomIcon}></Marker>
          </MapContainer>
        </div>
        <div className='absolute w-full justify-center mx-auto hidden z-2 top-[-180px] md:inline-flex flex-row left-[50%] translate-x-[-50%] '>
          <div className='w-full max-w-[600px] text-center shadow  border-r-[1px] bg-white border-custom-darker-pink flex-1 p-[80px] flex justify-center items-center'>
            <div>
              <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Ceremony</div>
              <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
              <div className='text-[14px] mb-[20px]'>
                Saturday, 30 November 2024
                <br />
                02:30 PM
                <br />
                Immaculate Conception Chapel, CIC New Site,
                <br /> Cabanatuan City
              </div>
              <a
                href='https://maps.app.goo.gl/fpByHdqxhDuoNeZZ7'
                target='_blank'
                className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[16px]'
                rel='noreferrer'
              >
                View on Map
              </a>
            </div>
          </div>

          <div className='w-full max-w-[600px] text-center shadow  border-l-[1px] bg-white border-custom-darker-pink flex-1 p-[80px] flex justify-center items-center'>
            <div>
              <div className='font-medium mb-[15px] text-[40px] font-haviland'>Wedding Reception</div>
              <div className='h-[2px] w-[100px] mb-[20px] bg-custom-darker-pink mx-auto'></div>
              <div className='text-[14px] mb-[20px]'>
                Saturday, 30 November 2024
                <br />
                After Wedding Ceremony
                <br />
                La Benue Center for Events,
                <br /> Cabanatuan City
              </div>

              <a
                href='https://maps.app.goo.gl/dMKLUCZ6Hxqygefr6'
                target='_blank'
                className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[10px] px-[16px]'
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
