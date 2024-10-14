/* eslint-disable react/no-unescaped-entities */
const PreFooter = () => {
  return (
    <div id='details' className='bg-custom-black py-[80px] px-4 w-full'>
      <div className='mx-auto max-w-screen-2xl flex flex-row gap-5'>
        <div className='flex-1'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Wedding Colors</div>
          <div className='text-white max-w-[300px] mb-[20px]'>
            We're excited to celebrate with you! 💖 Kindly wear attire 👔👗 that follows the color palette we've chosen
            to match our special day. Your presence and attention to detail will make the day even more beautiful! 🥂✨
          </div>
          <div className='flex flex-row gap-5'>
            <div className='rounded-full w-[30px] h-[30px] bg-[#cd848b]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#ffc097]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#84697c]'></div>
            <div className='rounded-full w-[30px] h-[30px] bg-[#dbc8c1]'></div>
          </div>
        </div>
        <div className='flex-1 text-center'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Share the Love!</div>
          <div className='text-white max-w-[300px] mb-[20px] mx-auto'>
            We're so excited to share our big day with you! 💖 Join us in celebrating love, laughter, and forever. Don’t
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
        <div className='flex-1 text-right'>
          <div className='text-white mb-[10px] font-haviland text-[30px]'>Couple Contact Info</div>
          <div className='text-white max-w-[300px] ml-auto mb-[20px]'>
            For any questions or details regarding our wedding, feel free to reach out! You can contact us with our
            mobile numbers 📱. We can't wait to celebrate with you! 🥂✨
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
            Abigail-Ivy Cuaresma Malubay (Coordinator):
            <br />
            0921 955 3992
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
