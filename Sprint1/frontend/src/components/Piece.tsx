import { Piece } from '../model/piece';

interface PieceDivProps {
    pieceInfo: Piece;
}

const PieceDiv = ({pieceInfo}: PieceDivProps) => {
    switch (pieceInfo.getColor()) {
        case "red":
            return (!pieceInfo.getIsKing()) ? <img src={'/red-chip.svg'} className='cursor-pointer w-10/12 h-10/12 rounded-full'></img> : <img src={'/red-queen-chip.svg'} className='cursor-pointer w-10/12 h-10/12 rounded-full'></img>;
        case "black":
            return (!pieceInfo.getIsKing()) ? <img src={'/black-chip.svg'} className='cursor-pointer w-10/12 h-10/12 rounded-full'></img> : <img src={'/black-queen-chip.svg'} className='cursor-pointer w-10/12 h-10/12 rounded-full'></img>;

        default:
            return null;
    }
};

export default PieceDiv;
