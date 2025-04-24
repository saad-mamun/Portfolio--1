import React from 'react'

const Footerone = () => {
    const date = new Date();

  return (
    <footer className='relative'>
      <div className='absolute w-full text-end'>
        <h1 className="bg-[#001F3F] text-white font-medium text-center py-1 md:py-2 ">
          Copyright © {date.getFullYear()} - Present by{" "}
          <span>
            <a href="https://litonali.netlify.app/" className="text-[#FF9C01] cursor-pointer">
              Liton Ali{" "}
            </a>
          </span>
          Website. All Right Reserved.
        </h1>
      </div>
    </footer>
  );
}

export default Footerone
