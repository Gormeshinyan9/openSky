import React from 'react';
import {AppProps} from 'next/app';
import {ToastContainer} from 'react-toastify';

import 'react-image-crop/dist/ReactCrop.css';
import 'react-toastify/dist/ReactToastify.css';

import '~/styles/index.scss';

const TestApp: React.FC<AppProps> = ({Component, pageProps}) => (
  <React.Fragment>
    <Component {...pageProps} />
    <ToastContainer />
  </React.Fragment>
);

export default TestApp;
