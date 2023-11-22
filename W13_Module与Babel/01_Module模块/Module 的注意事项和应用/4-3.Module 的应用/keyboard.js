import { LEFT_KEYCODE, RIGHT_KEYCODE } from './constants.js';

const keyboard = {
  bindEvent(slider) {
    document.addEventListener(
      'keyup',
      ev => {
        if (ev.code === LEFT_KEYCODE) {
          slider.prev();
        } else if (ev.code === RIGHT_KEYCODE) {
          slider.next();
        }
      },
      false
    );
  }
};

export default keyboard;
