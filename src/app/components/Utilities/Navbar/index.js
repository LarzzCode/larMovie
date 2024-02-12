import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <header className='bg-color-accent'>
        <div className='flex md:flex-row flex-col justify-between md:items-center p-4'>
            <Link href={'/'} className='font-bold text-white text-2xl'>LARMOVIES</Link>
            <InputSearch />
        </div>
    </header>
  )
}

export default Navbar