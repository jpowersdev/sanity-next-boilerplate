import React from 'react';
import NextHead from 'next/head';
import { urlFor } from '../../utility/assets';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => {
  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <title>{props.metaTitle || props.title}</title>
      <meta
        name='description'
        content={props.description || defaultDescription}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:url' content={props.ogUrl || defaultOGURL} />
      <meta property='og:title' content={props.ogTitle || props.title} />
      <meta
        property='og:description'
        content={props.ogDescription || defaultDescription}
      />
      <meta name='twitter:site' content={props.ogUrl || defaultOGURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:image'
        content={
          urlFor(props.ogImage)
            .width(200)
            .url() || defaultOGImage
        }
      />
      <meta
        property='og:image'
        content={
          urlFor(props.ogImage)
            .width(200)
            .url() || defaultOGImage
        }
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </NextHead>
  );
};

export default Head;
