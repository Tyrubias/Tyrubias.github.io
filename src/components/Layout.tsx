import React from 'react';
import Sidebar from './Sidebar';

function Layout({
  right,
  center,
}: {
  right: JSX.Element;
  center: JSX.Element;
}): JSX.Element {
  return (
    <div className='md:grid grid-cols-page gap-x-8 grid-rows-none items-center justify-between h-screen'>
      {window.innerWidth > 768 && (
        <Sidebar
          links={[
            { path: '/', name: 'Home' },
            { path: '/experience', name: 'Experience' },
            { path: '/projects', name: 'Projects' },
            { path: '/education', name: 'Education' },
          ]}
        />
      )}
      {center}
      {right}
    </div>
  );
}

export default Layout;
