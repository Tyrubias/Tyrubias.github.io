import React from 'react';

function Headshot({
  imgName,
  altText,
}: {
  imgName: string;
  altText: string;
}): JSX.Element {
  const jpgImgUrl = new URL(`../assets/${imgName}.jpg`, import.meta.url).href;
  const webpImgUrl = new URL(`../assets/${imgName}.webp`, import.meta.url).href;

  return (
    <picture>
      <source srcSet={webpImgUrl} type='image/webp' />
      <source srcSet={jpgImgUrl} type='image/jpeg' />
      <img className='rounded-full' src={jpgImgUrl} alt={altText} />
    </picture>
  );
}

export default Headshot;
