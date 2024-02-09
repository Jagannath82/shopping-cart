import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BlogPostLinkRenderer(props){
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

    const buttonClicked = () => {
        alert(`${cellValue} medals won!`);
    };

    return (
        <span>
            <NavLink class="nav-link" to="/blog/1">Show Details</NavLink>
        </span>
    );
};