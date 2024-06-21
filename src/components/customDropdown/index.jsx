/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

// utils
import isEmpty from '../../utils/isEmpty';

const CustomDropdown = ({ placeholder, data }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const getSelectedValue = (text) => {
    setSelectedValue(text);
    setOpenMenu(false);
  };

  const menuRef = useRef(null);

  // close menu wrapper if clicked outside zone
  const handleClickOutsideHeader = (e) => {
    if (e.target !== menuRef?.current && !menuRef?.current?.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  // use effects
  useEffect(() => {
    // Bind the event listener of mouse out
    window.addEventListener('click', handleClickOutsideHeader);
    return () => {
      // Unbind the event listener of mouse out on clean up
      window.removeEventListener('click', handleClickOutsideHeader);
    };
  });

  return (
    <div ref={menuRef} className='relative w-full'>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className='relative cursor-pointer text-[16px] outline-none w-full pt-[.75em] pb-[.75em] pl-[.75em] p-[1.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray color-custom-black placeholder:text-custom-black text-nowrap'
      >
        {selectedValue || placeholder}
        <div className='absolute top-[50%] translate-y-[-50%] right-[.75em]'>
          <svg xmlns='http://www.w3.org/2000/svg' width={15} height={15} viewBox='0 0 512 512'>
            <path
              d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
              fill='#2A2A2A'
            />
          </svg>
        </div>
      </div>
      {openMenu && !isEmpty(data) && (
        <div className='absolute z-10 shadow top-[105%] w-full h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray color-custom-black'>
          {data.map((value, index) => (
            <div
              key={`placeholder ${value} ${index}`}
              onClick={() => getSelectedValue(value)}
              className='text-[16px] p-[.75em] cursor-pointer hover:bg-blue-500 hover:text-white'
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
