import React from 'react';
import ReactDOM from 'react-dom';
import GiftExpertApp from './GiftExpertApp';
import './index.css';



ReactDOM.render(
  <GiftExpertApp defaultCategories={['One Piece']} />,
  document.getElementById('root')
);


