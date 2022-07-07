import React from 'react';
import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
            <Outlet />
        </div>
    )
}

export default HomePage;