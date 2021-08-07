import React, { ReactNode } from 'react';

function Header({ children }: { children: ReactNode }): JSX.Element {
  return (
    <h1 className='font-extrabold text-5xl my-8 subpixel-antialiased'>
      {children}
    </h1>
  );
}

export default Header;
