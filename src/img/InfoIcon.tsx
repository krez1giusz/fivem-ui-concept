import React from 'react';

const InfoIcon = ({ color = '#1C274C' }) => (

  <svg width="62px" height="62px" viewBox="0 0 24 24" style={{ filter: `drop-shadow(0 0 5px ${color})` }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill={color}/>
    <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>

);

export default InfoIcon;