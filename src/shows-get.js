import dawnOftheDead from './images/dawn-of-the-dead.jpg';
import shawnOftheDead from './images/shaun-of-the-dead.jpg';
import tgwatg from './images/thegirlwithallthegifts.jpg';
import twentyEightDaysLater from './images/28dayslater.jpg';
import worldWarZ from './images/worldwarz.jpg';
import trainToBusan from './images/train-to-busan.jpg';

export default function getShows() {
    return [
      { id: 'dawn-of-the-dead', title: 'Dawn of the Dead', coverphoto: dawnOftheDead },
      { id: 'shawn-of-the-dead', title: 'Shawn of the Dead', coverphoto: shawnOftheDead },
      { id: 'the-girl-with-all-the-gifts', title: 'The Girl with all the Gifts', coverphoto: tgwatg },
      { id: '28-days-later', title: '28 Days Later', coverphoto: twentyEightDaysLater },
      { id: 'world-war-z', title: 'World War Z', coverphoto: worldWarZ },
      { id: 'train-to-busan', title: 'Train to Busan', coverphoto: trainToBusan },
    ];
  }