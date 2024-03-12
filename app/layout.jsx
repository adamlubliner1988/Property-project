import '@/assets/styles/global.css';
export const metadata ={
title: 'propertyPuls | Find the Perfect Rental',
description : 'Find The Perfect Rental For You',
keywords: 'rental, find rental, assets for rental'

};

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <div>{children}</div>

    </html>
  );
};

export default MainLayout;
