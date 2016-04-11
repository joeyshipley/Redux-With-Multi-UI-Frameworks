import Promise from 'bluebird';

class EnglishLocal {
  constructor() {
    this.page_title = 'Calculator Fun!';
    this.rawr1 = 'Rawr 1';
    this.rawr2 = 'Rawr 2';
    this.rawr3 = 'Rawr 3';
  }

  translate() {
    return {
      page_title: this.page_title
    }
  }
}
export default EnglishLocal;