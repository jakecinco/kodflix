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
          <Show title='Dawn of the Dead' coverphoto={dawnOftheDead} />
          <Show title='Shawn of the Dead' coverphoto={shawnOftheDead} />
          <Show title='The Girl with all the Gifts' coverphoto={tgwatg} />
        </div>
        <div className='container'>
          <Show title='28 Days Later' coverphoto={twentyEightDaysLater} />
          <Show title='World War Z' coverphoto={worldWarZ} />
          <Show title='Train to Busan' coverphoto={trainToBusan} />
        </div>
      </div>
    );
  }