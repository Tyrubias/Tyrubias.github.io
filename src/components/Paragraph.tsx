import React, { ReactNode } from 'react';

function Paragraph({ children }: { children: ReactNode }): JSX.Element {
  return (
    <p className='my-3 text-lg font-thin subpixel-antialiased'>{children}</p>
  );
}

export default Paragraph;
