import React from 'react';
import '../App';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='head1'>GET YOUR TRADE</h1>
      <video  id='appu' src='/videos/video-2.mp4' type='video/mp4' autoPlay loop muted />

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SHOP NOW <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;