import { Piece } from "../model/piece";

// Define the board size
export const BOARD_SIZE = 8;

// Function to initialize the board with pieces
export const initializeBoard = (): Piece[][] => {
  //const board: Piece[][] = [];
  const board: Piece[][] = [
    [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
    [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
    [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
    [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
    [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
  ];
  /*
  // default
  const board: Piece[][] = [
    ['black', 'none', 'black', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'black', 'none', 'black', 'none', 'black', 'none', 'black'],
    ['black', 'none', 'black', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red'],
    ['red', 'none', 'red', 'none', 'red', 'none', 'red', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red']
  ];
  const board: Piece[][] = [
    [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
    [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
    [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
    [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
    [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
  ];
  */

  /*
  const board: Piece[][] = [
    ['black', 'none', 'black', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'black', 'none', 'black', 'none', 'black', 'none', 'black'],
    ['black', 'none', 'black', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red'],
    ['red', 'none', 'red', 'none', 'red', 'none', 'red', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red']
  ];

  // reina no se coma al suyo
  const board: Piece[][] = [
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'red', 'none', 'black', 'none', 'none', 'none', 'black'],
    ['black', 'none', 'none', 'none', 'none', 'none', 'black', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'black', 'none', 'black'],
    ['none', 'none', 'black', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'red', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
  ];


  // reina haga movimiento multiple
  const board: Piece[][] = [
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'red', 'none', 'black', 'none', 'none', 'none', 'black'],
    ['black', 'none', 'none', 'none', 'none', 'none', 'black', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'black', 'none', 'black'],
    ['none', 'none', 'black', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'red', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
  ];

  const board: Piece[][] = [
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black')],
    [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
    [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
    [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')]
];

  movimiento multiple con dama peon
  const board: Piece[][] = [
    ['black', 'none', 'black', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'black', 'none', 'black', 'none', 'none', 'none', 'black'],
    ['black', 'none', 'none', 'none', 'black', 'none', 'black', 'none'],
    ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'black'],
    ['none', 'none', 'black', 'none', 'none', 'none', 'none', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red'],
    ['red', 'none', 'red', 'none', 'red', 'none', 'red', 'none'],
    ['none', 'red', 'none', 'red', 'none', 'red', 'none', 'red']
  ];
   */
  return board;
};