# Edward and Maila Wedding Invitation Website

Welcome to the wedding invitation website for Edward and Maila! This project is built using Vite, ReactJS, and Tailwind CSS, with additional functionality provided by EmailJS for RSVP handling, Google Maps API for event location, and reCAPTCHA for form security.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Setup Instructions](#setup-instructions)
- [Hosting](#hosting)

## Project Overview

This website serves as a digital invitation for the wedding ceremony and reception of Edward and Maila. It provides all the necessary information for guests, including event details, location, RSVP options, and more.

## Features

- **Responsive Design**: Mobile-friendly layout.
- **Interactive RSVP Form**: Secure RSVP submissions via EmailJS and reCAPTCHA.
- **Location Map**: Embedded Google Maps for the wedding venue.
- **Countdown Timer**: Time until the wedding event.

## Tech Stack

- **Frontend**:

  - [Vite](https://vitejs.dev/) - Build tool
  - [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

- **APIs**:
  - [EmailJS](https://www.emailjs.com/) - For sending RSVP emails
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - For displaying location
  - [reCAPTCHA](https://www.google.com/recaptcha) - To protect the RSVP form

## Sections

1. **Banner Section**: A visually appealing section showing couples image with date and location of ceremony.
2. **Couple Info Section**: Brief bios and photos of Edward and Maila.
3. **Locations Section**: Addresses and embedded maps for the ceremony and reception venues.
4. **Time Until Event Section**: Countdown timer to the wedding day.
5. **RSVP Section**: Form for guests to RSVP, protected by reCAPTCHA.
6. **Pre-Footer Section**: A summary of event details and contact informations.
7. **Header and Footer Section**: Navigation links and additional information at the top and bottom of the page.

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:Arvey18/edward-and-maila-wedding-invite-website.git
   ```

2. Install Dependencies:

   ```bash
   npm install or yarn install
   ```

3. Create a .env file in the root directory and add required keys (EmailJS and Google Maps API):

   ```bash
   ENVIRONMENT = LOCAL
   VERSION = 0.0.0
   VITE_GOOGLE_RECAPTCHA_SITE_KEY = xxx
   EMAIL_JS_USER_ID = xxx
   EMAIL_JS_TEMPLATE_ID = xxx
   EMAIL_JS_SERVICE_ID = xxx
   ```

4. Start Application:

   ```
   npm run dev or yarn dev
   ```

## Hosting

This website is hosted on [Render.com](https://render.com) using their free plan, making it accessible for guests to view and RSVP.
