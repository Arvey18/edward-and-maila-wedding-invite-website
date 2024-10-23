import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed z-[9999] w-[100%] h-[100%] bg-custom-gray flex flex-col items-center justify-center'>
      <h1 className='ml16 text-custom-black'>Page not found!</h1>
      <h2 className='text-custom-black font-normal italic'>
        #<span className='font-bold'>MAI</span>p<span className='font-bold'>ER</span>fectmatch
      </h2>
      <div
        href='https://maps.app.goo.gl/fpByHdqxhDuoNeZZ7'
        className='relative shadow mx-auto mt-[15px] text-[12px] rounded-md cursor-pointer bg-custom-darker-pink inline-block text-white py-[8px] px-[16px]'
        rel='noreferrer'
        onClick={() => navigate('/')}
      >
        Back to Home
      </div>
    </div>
  );
};

export default NotFound;
