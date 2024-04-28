import { PieceString } from "../utils/types";

export class Piece {
    // Propiedades de la clase
    color: PieceString;
    isKing: boolean;

    // Constructor de la clase
    constructor(color: PieceString) {
        this.color = color;
        this.isKing = false;
    }

    getColor(): PieceString{
        return this.color;
    }

    setColor(color: PieceString): void{
        this.color = color;
    }

    getIsKing(): boolean{
        return this.isKing;
    }
    
    setIsKing(isKing: boolean): void{
        this.isKing = isKing
    }
}