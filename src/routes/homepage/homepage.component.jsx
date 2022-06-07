import React from 'react';

import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () =>(
<div className='homepage'>
   <Outlet />
   <Directory />
</div>
)

export default HomePage;