import React from 'react';

import CalcForm from '../components/CalcForm'
const Calculate = () => {
  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Check how much you can earn</h2>
          <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto' data-aos='fade-up' data-aos-offset='450'>Lets check your cash rate to see how much you will earn today.</p>
        </div>
        <CalcForm/>
      </div>
    </section>
  )
};

export default Calculate;
