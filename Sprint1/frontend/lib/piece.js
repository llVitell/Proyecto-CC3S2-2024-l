class Piece {
  constructor(color) {
      this.color = color;
      this.isKing = false;
  }

  getColor() {
      return this.color;
  }

  getOppositeColor(color) {
      let oppositeColor;
      switch (color) {
          case "red":
              oppositeColor = "black";
              break;
          case "black":
              oppositeColor = "red";
              break;
          default:
              oppositeColor = "none";
      }
      return oppositeColor;
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
