/* eslint-disable no-undef */
const serverConfig = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  VERSION: process.env.VERSION,
  VITE_GOOGLE_RECAPTCHA_SITE_KEY: process.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY,
  EMAIL_JS_USER_ID: process.env.EMAIL_JS_USER_ID,
  EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
};

export default serverConfig;
