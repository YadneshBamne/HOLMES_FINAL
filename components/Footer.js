import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black max-w-screen shadow dark:bg-gray-900">
        <div class="w-full mx-auto p-4 h-56 md:flex md:items-center md:justify-evenly">
          <span class="text-sm text-white sm:text-center dark:text-white">
            ©
            <a href="/" class="hover:underline">
              HOLMES
            </a>
            . All Rights Reserved.
          </span>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer