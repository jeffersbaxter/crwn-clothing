import React from "react";
import { useNavigate } from 'react-router-dom';
import withRouter from '../../utils/with-router';

import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(linkUrl);

    return (
        <div 
            className={`${size} menu-item`} 
            onClick={onNavigateHandler}
        >
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
