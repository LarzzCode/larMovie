import Link from 'next/link';
import React from 'react';

export const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="text-2xl font-bold p-4 flex justify-between items-center text-color-primary">
      <h1 className='bg-color-accent px-2 py-1 rounded'>{title}</h1>
      {linkHref && linkTitle ?
        <Link href={linkHref} className="md:text-md text-sm text-color-dark hover:text-color-accent underline transition-all">
          {linkTitle}
        </Link>
        : null
      }
    </div>
  )
}
