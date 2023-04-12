#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let sp = '';
      for (let j = 0; j < this.width; j++) {
        sp += c;
      }
      console.log(sp);
    }
  }
}

module.exports = Square;
