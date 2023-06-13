import React from 'react'
import workImg from '../assets/workImg.jpeg';
import movie from '../assets/movie.jpg';
import resumens from '../assets/resumens.jpg';
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>//Check out some of my recent work </p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid  Item */}
          <div style={{backgroundImage: `url(${workImg})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${movie})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Movie Booking Application
              </span>
              <div className='pt-8 text-center'>
               <a href='https://silver-liger-d822ac.netlify.app/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${resumens})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Resume Application
              </span>
              <div className='pt-8 text-center'>
               <a href='https://rainbow-peony-296d87.netlify.app/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${movie})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${workImg})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${movie})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo</button>
               </a>
               <a href='/'>
                <button className='text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code</button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Work