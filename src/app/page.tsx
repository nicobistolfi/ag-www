'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import DataSharingSvg from '~/svg/data-sharing.svg';
import Logo from '~/svg/logo-yellow-vertical.svg';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col bg-primary-900'>
      <Head>
        <title>Welcome to Our Platform</title>
        <meta
          name='description'
          content='Transform your business with our innovative solutions'
        />
      </Head>

      <main className='flex-grow'>
        <div className='container mx-auto px-6 py-12 md:py-16 lg:py-20'>
          <div className='flex flex-col gap-16 md:flex-row md:items-center md:justify-between'>
            {/* Left Column - Content */}
            <div className='flex-1 max-w-xl'>
              {/* Logo */}
              <div>
                <Logo
                  className='w-64 h-28 md:w-64 md:h-20'
                  aria-label='Alien Giraffe Logo'
                />
              </div>

              {/* Content Section */}
              <div className='space-y-8'>
                <h1 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary-100'>
                  Your customers, their data.
                </h1>
                <p className='text-lg md:text-xl max-w-lg text-primary-50'>
                  Seamless integration with your customer's data. Forget about
                  stalled deals and contracted ARR that never turns into accrued
                  ARR, Alien Giraffe helps you deliver more value faster with
                  less hustle.
                </p>
                <div className='space-x-4'>
                  {/* <button
                    className='inline-flex items-center justify-center
                    px-8 py-3.5 text-base font-medium text-white
                    rounded-lg shadow-lg bg-secondary-500
                    hover:shadow-secondary-500/50
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    focus:ring-secondary-500 focus:ring-offset-2'
                  >
                    Contact Us
                  </button> */}
                  <button
                    className='inline-flex items-center justify-center
                    px-8 py-3.5 text-base font-medium
                    rounded-lg shadow-lg bg-secondary-400
                    text-primary-900 hover:shadow-secondary-400/50
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    focus:ring-secondary-400 focus:ring-offset-2'
                    onClick={() => window.open('mailto:hello@aliengiraffe.ai')}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Data Sharing Illustration */}
            <div className='flex-1 flex items-center justify-center lg:justify-end'>
              <div
                className='relative transform hover:scale-105 transition-transform
                duration-300 ease-in-out p-8 rounded-2xl'
              >
                <DataSharingSvg
                  className='w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]'
                  aria-label='Data Sharing Illustration'
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-primary-900'>
        <div className='container mx-auto px-6 py-8'>
          <p className='text-center text-sm text-primary-50'>
            © {new Date().getFullYear()} Alien Giraffe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
