import Promise from 'bluebird';

class DroidLocal {
  constructor() {
    this.page_title = 'Beep-bo-oop!';
    this.rawr1 = 'BeeYoop BeeDeepBoom Weeop DEEpaEEya';
    this.rawr2 = 'DrruurRRP tanaNDuh?';
    this.rawr3 = 'WOOOAH twee-vwoop VRrrUHD DEda dah';
  }

  translate() {
    return {
      page_title: this.page_title
    }
  }
}
export default DroidLocal;