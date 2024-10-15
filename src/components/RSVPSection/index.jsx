import { useState, useRef } from 'react';
import { init, send } from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import CustomDropdown from '../customDropdown';
import CoupleImage from '../../assets/images/wedding-photo-1.jpg';
import serverConfig from '../../constants/serverConfig';

const { VITE_GOOGLE_RECAPTCHA_SITE_KEY, EMAIL_JS_USER_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_SERVICE_ID } = serverConfig;

// Initialize EmailJS with your User ID
init(EMAIL_JS_USER_ID);

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    attending: '',
    attendingCode: false,
    message: '',
  });

  const reCaptchaRef = useRef();

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isLoading);
    if (!isLoading) {
      // Ensure attending is selected
      if (!formData.attending) {
        setError('Please select if you are attending or not.');
        return;
      }
      const token = await reCaptchaRef.current.executeAsync();
      console.log(token, 'token');

      // Set loading state to true
      setIsLoading(true);

      // Sending email using EmailJS
      send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, { ...formData, 'g-recaptcha-response': token })
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setIsSent(true);
          setError(null); // Reset error if the email is sent successfully
          // Reset form data
          setFormData({ ...formData, firstname: '', lastname: '', attending: '', message: '' });
          reCaptchaRef.current.reset();
        })
        .catch((error) => {
          reCaptchaRef.current.reset();
          console.log('Failed to send email. Error:', error);
          setError('Failed to send email. Please try again later.');
        })
        .finally(() => {
          // Reset loading state after the process
          setIsLoading(false);
        });
    }
  };

  console.log(formData, 'form data');

  return (
    <div className='relative pt-[110px] xs:pt-[110px] sm:pt-[260px] md:pt-[410px] pb-[80px] px-4 bg-custom-gray'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='absolute top-[-200px] xs:top-[-260px] left-[50%] translate-x-[-50%] w-full flex justify-center'>
          <img src={CoupleImage} className='w-full max-w-[900px]' alt='couple-photo' />
        </div>
        <div id='rsvp' className='text-[24px] font-medium w-[100%] flex flex-col justify-center items-center px-4'>
          <div className='relative overflow-visible text-center bg-transparent text-[50px] md:text-[70px] px-[0px] md:px-[25px] z-20 font-haviland w-full'>
            Are You Attending?
          </div>
          <div className='z-10 h-[2px] bg-custom-darker-pink w-[150px] mt-[20px]'></div>
        </div>
        <div className='relative m-auto text-center max-w-[580px] px-4 mt-[40px]'>
          We are delighted to announce that we have reserved two seats for you at our wedding! Please kindly reply on or
          before November 18, 2024.
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white mt-[60px] shadow relative w-full max-w-[745px] mx-auto p-[20px] md:p-[50px] flex flex-col gap-5'
        >
          <>
            {isSent ? (
              <p className='text-green-600 text-center mt-0'>
                {formData.attendingCode
                  ? "Your RSVP has been received! Thank you for confirming your attendance. We can't wait to celebrate with you!"
                  : 'Thank you for your response! We understand you can’t attend this time. Stay connected for future events!'}
              </p>
            ) : (
              <>
                <div className='flex flex-row gap-5'>
                  <div className='flex-1'>
                    <input
                      id='firstname'
                      name='firstname'
                      type='text'
                      placeholder='Firstname *'
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className='placeholder:text-custom-black text-[16px] outline-none w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black'
                    />
                  </div>
                  <div className='flex-1'>
                    <input
                      id='lastname'
                      name='lastname'
                      type='text'
                      placeholder='Lastname *'
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className='text-[16px] outline-none w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black placeholder:text-custom-black'
                    />
                  </div>
                </div>
                <div>
                  <CustomDropdown
                    placeholder='Are you attending *'
                    data={[
                      { text: 'Yes, I am attending', code: true },
                      { text: 'No, I am not attending', code: false },
                    ]}
                    onChange={(value, code) => setFormData({ ...formData, attending: value, attendingCode: code })}
                    key='guests-attending-dropdown'
                  />
                </div>
                <div>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='text-[16px] outline-none min-h-[120px] w-full p-[.75em] h-auto rounded-[2px] bg-custom-light-gray border-solid border-[1px] border-custom-darker-gray text-custom-black placeholder:text-custom-black'
                    placeholder='Message'
                  />
                </div>
                <ReCAPTCHA
                  className='g-recaptcha'
                  sitekey={VITE_GOOGLE_RECAPTCHA_SITE_KEY}
                  size='invisible'
                  ref={reCaptchaRef}
                />
                <button
                  type='submit'
                  className={`${
                    isLoading ? 'bg-gray-300 cursor-not-allowed ' : 'bg-custom-darker-pink'
                  } text-white px-4 py-2 rounded transition duration-200`}
                >
                  {isLoading ? 'Sending...' : 'Submit RSVP'}
                </button>
                {error && <p className='text-red-600'>{error}</p>}
              </>
            )}
          </>
        </form>
      </div>
    </div>
  );
};

export default RSVPSection;
