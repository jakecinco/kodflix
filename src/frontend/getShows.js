import shaunOfTheDead from './gallery/show-cover/images/shaun-of-the-dead.jpg';
import dawnOfTheDead from './gallery/show-cover/images/dawn-of-the-dead.jpg';
import worldWarZ from './gallery/show-cover/images/worldwarz.jpg';
import theGirlWithAllTheGifts from './gallery/show-cover/images/thegirlwithallthegifts.jpg';
import trainToBusan from './gallery/show-cover/images/train-to-busan.jpg';
import twentyEightDaysLater from './gallery/show-cover/images/28dayslater.jpg';

export default function getGallery() {
    return [{
        id: 'shaun-of-the-dead',
        title: 'Shaun of the Dead',
        coverphoto: shaunOfTheDead,
        synopsis: `Shaun (Simon Pegg) is a 30-something loser with a dull, easy existence. When he's not working at the electronics store, he lives with his slovenly best friend, Ed (Nick Frost), in a small flat on the outskirts of London. The only unpredictable element in his life is his girlfriend, Liz (Kate Ashfield), who wishes desperately for Shaun to grow up and be a man. When the town is inexplicably overrun with zombies, Shaun must rise to the occasion and protect both Liz and his mother (Penelope Wilton).`
    }, {
        id: 'dawn-of-the-dead', 
        title: 'Dawn of the Dead', 
        coverphoto: dawnOfTheDead,
        synopsis: `When her husband is attacked by a zombified neighbor, Ana (Sarah Polley) manages to escape, only to realize her entire Milwaukee neighborhood has been overrun by the walking dead. After being questioned by cautious policeman Kenneth (Ving Rhames), Ana joins him and a small group that gravitates to the local shopping mall as a bastion of safety. Once they convince suspicious security guards that they are not contaminated, the group bands together to fight the undead hordes.`
    }, { 
        id: 'world-war-z', 
        title: 'World War Z', 
        coverphoto: worldWarZ,
        synopsis: `When former U.N. investigator Gerry Lane (Brad Pitt) and his family get stuck in urban gridlock, he senses that it's no ordinary traffic jam. His suspicions are confirmed when, suddenly, the city erupts into chaos. A lethal virus, spread through a single bite, is turning healthy people into something vicious, unthinking and feral. As the pandemic threatens to consume humanity, Gerry leads a worldwide search to find the source of the infection and, with luck, a way to halt its spread.`
    }, { 
        id: 'the-girl-with-all-the-gifts', 
        title: 'The Girl with all the Gifts', 
        coverphoto: theGirlWithAllTheGifts,
        synopsis: `One of several children immune to a mutated fungal disease that has eradicated free will and turned the rest of humanity into cannibalistic zombies, a gifted young girl escapes the safety of a special school and helps guide mankind's survival.`
    }, { 
        id: 'train-to-busan', 
        title: 'Train to Busan', 
        coverphoto: trainToBusan,
        synopsis: `While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan. Sok-woo, a father with not much time for his daughter, Soo-ahn, are boarding the KTX, a fast train that shall bring them from Seoul to Busan.`
    }, { 
        id: '28-days-later', 
        title: '28 Days Later', 
        coverphoto: twentyEightDaysLater,
        synopsis: `A group of misguided animal rights activists free a caged chimp infected with the "Rage" virus from a medical research lab. When London bike courier Jim (Cillian Murphy) wakes up from a coma a month after, he finds his city all but deserted. On the run from the zombie-like victims of the Rage, Jim stumbles upon a group of survivors, including Selena (Naomie Harris) and cab driver Frank (Brendan Gleeson), and joins them on a perilous journey to what he hopes will be safety.`
    }
    ]
}