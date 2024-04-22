class Piece {
  constructor(color, isKing = false) {
      this.color = color;
      this.isKing = isKing;
  }

  getColor() {
      return this.color;
  }

  setColor(color) {
      this.color = color;
  }

  getIsKing() {
      return this.isKing;
  }

  setIsKing(isKing) {
      this.isKing = isKing;
  }
} 

export default Piece;
