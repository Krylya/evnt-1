export default class PlayGame {
  constructor(playingField, randomNumber) {
    this.fallCount = 0;
    this.currentCell = 0;
    this.hit = 'zero';
    this.interval = 0;
    this.randNum = randomNumber;
    this.field = playingField.field;
    this.cells = playingField.cells;
    this.goblin = playingField.img;
    this.countContainer = playingField.countContainer;
    this.gameoverContainer = playingField.gameover;
  }

  play() {
    this.field.addEventListener('click', this.onGoblinHit.bind(this)); // добавляем обработчик
    this.interval = setInterval(this.actionTimer.bind(this), 1000); // запускаем таймер

    this.cells[this.currentCell].appendChild(this.goblin); // добавляем картинкку
  }

  onGoblinHit(event) {
    const targetCell = event.target.closest('.cell'); // [data-cell]

    if (targetCell.children.length !== 0) {
      this.hit = 'hit';
      clearInterval(this.interval); // останавливаем setInterval
      this.cells[this.currentCell].removeChild(this.goblin); // удаляем картинку

      this.interval = setInterval(this.actionTimer.bind(this), 1000); // запускаем таймер
    }
  }

  actionTimer() {
    this.currentCell = this.randNum.generateNumber(); // случайное число
    this.cells[this.currentCell].appendChild(this.goblin); // добавляем изображение в ячейку

    if (this.hit === 'zero') {
      this.fallCount += 1;
    } else {
      this.hit = 'zero';
    }

    this.countContainer.innerHTML = this.fallCount;

    if (this.fallCount > 4) this.gameOver();
  }// actionTimer

  gameOver() {
    this.gameoverContainer.classList.add('display');
    clearInterval(this.interval); // останавливаем setInterval
    this.cells[this.currentCell].removeChild(this.goblin); // удаляем картинку
  }
}
