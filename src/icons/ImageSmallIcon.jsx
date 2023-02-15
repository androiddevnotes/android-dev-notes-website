import * as React from 'react';
import { imageIconSrc, imageIconStyles } from '../utils/ImageConfig';

export default function ImageSmallIcon(props) {
  return (
    <img
      src={props.src || imageIconSrc}
      alt=""
      className='w-6 h-6 object-contain'
      {...props}
    />
  );
}