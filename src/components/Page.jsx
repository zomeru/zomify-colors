import React from 'react';
import '../styles/Page.css';

const Page = ({ children }) => {
  return <section className='page'>{children}</section>;
};

export default Page;
