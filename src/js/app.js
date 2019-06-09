import RandomNumber from './randomNumber';
import PlayingField from './playingField';
import PlayGame from './playGame';

const playField = new PlayingField('.cell-wrap', 'goblin.png');
const randomNumber = new RandomNumber(playField.cellCount);

const playGame = new PlayGame(playField, randomNumber);
playGame.play();
