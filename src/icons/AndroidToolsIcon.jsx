import * as React from 'react';
import { imageIconStyles } from '../utils/ImageConfig';
import { IMAGE_URLS } from '../utils/UrlsConfig';

export default function AndroidToolsIcon(props) {
  return (
    <img
      src={props.src || IMAGE_URLS.small.androidToolsIcon}
      alt="Android Apps"
      className='w-6 h-6 object-contain'
      {...props}
    />
  );
}