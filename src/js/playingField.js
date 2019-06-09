export default class PlayingField {
  constructor(wrapper, imageName) {
    this.field = document.querySelector(wrapper);
    this.cells = this.field.querySelectorAll('[data-cell]'); // ячейки
    this.cellCount = this.cells.length; // кол-во ячеек
    this.countContainer = document.querySelector('.counter'); // отображаем счетчик
    this.gameover = document.querySelector('.gameover');// заглушка "конец игры"

    this.img = document.createElement('img');
    this.img.src = `./src/img/${imageName}`;
  }
}
