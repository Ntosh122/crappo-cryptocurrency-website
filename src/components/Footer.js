import React from 'react';

import Logo from '../assets/img/logo.svg'
import VisaIamge from '../assets/img/visa.png'
import MastercardImg from '../assets/img/mastercard.png'
import BitcoinImg from '../assets/img/bitcoin.png'

import {IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io'
const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
       <div className="container mx-auto lg:mb-24">
        <div className='flex flex-col gap-12 lg:flex-row'>
          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-[285px]'>
            <a href='/'><img src={Logo} alt="/" /></a>
            </div>
          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Quick Links</div>
              <ul className='space-y-4 text-gray'>
                <li><a href="/" className='hover:text-pink-500 transition-all'>Home </a></li>
                <li><a href="/" className='hover:text-pink-500 transition-all'>Products</a></li>
                <li><a href="/" className='hover:text-pink-500 transition-all'>About </a></li>
                <li><a href="/" className='hover:text-pink-500 transition-all'>Features </a></li>
                <li><a href="/" className='hover:text-pink-500 transition-all'>Contact </a></li>
                <li><a href="/" className='hover:text-pink-500 transition-all'>Links </a></li>
              </ul>
            </div>
            <div className='text-center w-full lg:text-left'>
        <div className='text-xl font-medium mb-6'>Resources Links</div>
          <ul className='space-y-4 text-gray'>
           <li><a href="/" className='hover:text-pink-500 transition-all'>Download whitepaper</a></li>
           <li><a href="/" className='hover:text-pink-500 transition-all'>Smart Token</a></li>
           <li><a href="/" className='hover:text-pink-500 transition-all'>Blockchain Explore</a></li>
           <li><a href="/" className='hover:text-pink-500 transition-all'>Crypto API</a></li>
          <li><a href="/" className='hover:text-pink-500 transition-all'>Interest</a></li>
         </ul>
           </div>
          </div>

          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
              <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We accept the following payment systems</h3>
              <div className='flex justify-center items-center gap-6'>
                <img src={VisaIamge} alt="" />
                <img src={MastercardImg} alt="" />
                <img src={BitcoinImg} alt="" />
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className='py-12'>
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <div>&copy; 2022 CRAPPO. All rights reserved.</div>
          <div className='flex text-2xl gap-x-8'>
            <a href='/' className='hover:text-pink-500 transition-all'><IoLogoYoutube/></a>
            <a href='/' className='hover:text-pink-500 transition-all'><IoLogoInstagram/></a>
            <a href='/' className='hover:text-pink-500 transition-all'><IoLogoTwitter/></a>
            <a href='/' className='hover:text-pink-500 transition-all'><IoLogoLinkedin/></a>
          </div>
        </div>
       </div>
    </footer>
  )
};

export default Footer;
