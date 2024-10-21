/* eslint-disable react/no-unescaped-entities */
const PreFooter = () => {
  return (
    <div id='details' className='bg-custom-black py-[80px] px-4 w-full'>
      <div className='mx-auto max-w-screen-2xl flex flex-col md:flex-row gap-10'>
        <div className='flex-1 text-center md:text-left'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Wedding Colors and Gifts</div>
          <div className='text-white max-w-full md:max-w-[300px] mb-[20px]'>
            We can’t wait to celebrate our special day with you! To complement the occasion, we kindly ask that your
            attire reflects our chosen color palette
            <br />
            <br />
            Your presence is the greatest gift we could ask for, but if you'd like to offer more, a monetary gift would
            be sincerely appreciated. Thank you!
            <br />
            <br />
            Your presence and thoughtful touch will make our day all the more memorable! 🥂✨
          </div>
          <div className='inline-flex flex-row gap-5 md:mx-0 mx-auto mb-10'>
            <div className='rounded-full w-[30px] h-[30px] bg-[#cd848b]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#ffc097]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#84697c]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#dbc8c1]'></div>
          </div>
        </div>
        <div className='flex-1 text-center'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Share the Love!</div>
          <div className='text-white max-w-full md:max-w-[300px] mb-[20px] mx-auto'>
            We're so excited to share our big day with you! Join us in celebrating love, laughter, and forever. Don’t
            forget to tag your photos with #[OurHashtag] below — we can’t wait to see all the special moments! 🥂✨
          </div>
          <div className='text-white font-bold'>
            #EMLoveForever
            <br />
            #EdwardLoveMaila
            <br />
            #ForeverEdwardAndMaila
          </div>
        </div>
        <div className='flex-1 text-center md:text-right'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Contact Info</div>
          <div className='text-white max-w-full md:max-w-[300px] ml-auto mr-auto md:ml-auto md:mr-0 mb-[20px]'>
            For questions or details, feel free to reach out! It's our pleasure to celebrate with you! 🥂✨ You can
            contact us on this following numbers:
          </div>
          <div className='mb-[15px] text-white'>
            Edward:
            <br />
            0917 538 6585
          </div>
          <div className='mb-[15px] text-white'>
            Maila:
            <br />
            0917 145 4070
          </div>
          <div className='text-white'>
            Ivy (Coordinator):
            <br />
            0921 955 3992
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
