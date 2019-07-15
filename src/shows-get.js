import dawnOftheDead from './images/dawn-of-the-dead.jpg';
import shawnOftheDead from './images/shaun-of-the-dead.jpg';
import tgwatg from './images/thegirlwithallthegifts.jpg';
import twentyEightDaysLater from './images/28dayslater.jpg';
import worldWarZ from './images/worldwarz.jpg';
import trainToBusan from './images/train-to-busan.jpg';

export default function getShows() {
    return [
        { id: 'dawn-of-the-dead', title: 'Dawn of the Dead', coverphoto: dawnOftheDead, details: 'A nurse, a policeman, a young married couple, a salesman, and other survivors of a worldwide plague that is producing aggressive, flesh-eating zombies, take refuge in a mega Midwestern shopping mall.' },
        { id: 'shawn-of-the-dead', title: 'Shawn of the Dead', coverphoto: shawnOftheDead, details: 'Shaun of the Dead is a 2004 horror comedy film directed by Edgar Wright, co-written by Wright and Simon Pegg, and starring Pegg and Nick Frost. Pegg plays Shaun, a directionless Londoner who is caught in an apocalyptic zombie uprising.' },
        { id: 'the-girl-with-all-the-gifts', title: 'The Girl with all the Gifts', coverphoto: tgwatg, details: 'The Girl with All the Gifts is a 2016 British post-apocalyptic science fiction horror film directed by Colm McCarthy and written by Mike Carey, based on his 2014 novel of the same name. Starring Gemma Arterton, Paddy Considine, Glenn Close, and Sennia Nanua, the film depicts a dystopian future following a breakdown of society after most of humanity is wiped out by a fungal infection. The plot focuses on the struggle of a scientist, a teacher, and two soldiers who embark on a journey of survival with a special young girl named Melanie.' },
        { id: '28-days-later', title: '28 Days Later', coverphoto: twentyEightDaysLater, details: '28 Days Later is a 2002 British post-apocalyptic horror film directed by Danny Boyle, written by Alex Garland, and starring Cillian Murphy, Naomie Harris, Christopher Eccleston, Megan Burns, and Brendan Gleeson. The plot depicts the breakdown of society following the accidental release of a highly contagious virus and focuses upon the struggle of four survivors (Murphy, Harris, Burns, and Gleeson) to cope with the destruction of the life they once knew while evading those infected by the virus.' },
        { id: 'world-war-z', title: 'World War Z', coverphoto: worldWarZ, details: 'Former United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.' },
        { id: 'train-to-busan', title: 'Train to Busan', coverphoto: trainToBusan, details: 'While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.' },
    ];
}