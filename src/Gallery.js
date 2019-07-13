import React from 'react';
import Show from './Show';
import dawnOftheDead from './images/dawn-of-the-dead.jpg';
import shawnOftheDead from './images/shaun-of-the-dead.jpg';
import tgwatg from './images/thegirlwithallthegifts.jpg';
import twentyEightDaysLater from './images/28dayslater.jpg';
import worldWarZ from './images/worldwarz.jpg';
import trainToBusan from './images/train-to-busan.jpg';
export default function Gallery() {
    return (
      <div>
        <div className='container'>
          <Show id='dawn-of-the-dead' title='Dawn of the Dead' coverphoto={dawnOftheDead} />
          <Show id='shawn-of-the-dead' title='Shawn of the Dead' coverphoto={shawnOftheDead} />
          <Show id='the-girl-with-all-the-gifts' title='The Girl with all the Gifts' coverphoto={tgwatg} />
          <Show id='28-days-later' title='28 Days Later' coverphoto={twentyEightDaysLater} />
          <Show id='world-war-z' title='World War Z' coverphoto={worldWarZ} />
          <Show id='train-to-busan' title='Train to Busan' coverphoto={trainToBusan} />
        </div>
      </div>
    );
  }