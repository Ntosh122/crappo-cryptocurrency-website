import React from 'react';

import Logo from '../assets/img/logo.svg'
import Nav from './Nav'
import AccountBtns from './AccountBtns'

import { CgMenuRight } from 'react-icons/cg';

const Header = ({setNavMobile}) => {
  return (
    <header className='py-[30px] lg:pt-[60px]' data-aos='fade-down' data-aso-delay='600' data-aos-offset='900'>
      <div className="container mx-auto flex items-center justify-between">
        <a href='/'>
          <img src={Logo} alt="/" />
        </a>
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav/>
          <AccountBtns/>
        </div>
        <div className='lg:hidden cursor-pointer'>
          <CgMenuRight onClick={()=> setNavMobile(true)} className='text-2xl'/>
        </div>
      </div>
    </header>
  )
};

export default Header;
