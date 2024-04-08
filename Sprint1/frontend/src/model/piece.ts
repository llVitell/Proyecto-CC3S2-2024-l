export class Piece {
    // Propiedades de la clase
    color: string;
    isKing: boolean;

    // Constructor de la clase
    constructor(color: string) {
        this.color = color;
        this.isKing = false;
    }

    getColor(){
        return this.color;
    }

    getOppositeColor(color: string){
        let oppositeColor: string;
        switch (color) {
            case "red":
                oppositeColor = "black"
                break;
            case "black":
                oppositeColor = "red";
                break;
            
            default:
                oppositeColor = "none";
        }
        return oppositeColor;
    }
    
    setColor(color: string){
        this.color = color;
    }

    getIsKing(){
        return this.isKing;
    }
    
    setIsKing(isKing: boolean){
        this.isKing = isKing
    }
}