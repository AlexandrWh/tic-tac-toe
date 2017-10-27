class TicTacToe {
    constructor() {
						this.matrix = [];
						for(var i = 0 ; i < 3 ;i++){
								this.matrix[i]=[];
						}
						for(var i = 0 ; i < 3 ;i++){
								for(var j = 0 ; j < 3 ;j++){
										this.matrix[i][j] = null;
								}
						}
						this.counter = 0;
    }

    getCurrentPlayerSymbol() {
					if(this.counter%2){
							return "o";
					}
					else{
							return "x";
					}
    }

    nextTurn(rowIndex, columnIndex) {
    	if(!(this.matrix[rowIndex][ columnIndex])){
								this.matrix[rowIndex][ columnIndex] = this.getCurrentPlayerSymbol();
								this.counter++;
						}
    }

    isFinished() {
    		if(this.getWinner()){
    				return true;
    		}
						if(this.isDraw()){
								return true;
						}
						return false;
    }

    getWinner() {
								if((this.matrix[0][0] == this.matrix[0][1])&&(this.matrix[0][1] == this.matrix[0][2])&&(this.matrix[0][2] != null)){
											return this.matrix[0][0];
								}
						  if((this.matrix[1][0] == this.matrix[1][1])&&(this.matrix[1][1] == this.matrix[1][2])&&(this.matrix[1][2] != null)){
						  			return this.matrix[1][0];
						  }
								if((this.matrix[2][0] == this.matrix[2][1])&&(this.matrix[2][1] == this.matrix[2][2])&&(this.matrix[2][2] != null)){
										return this.matrix[2][0];
								}
								if((this.matrix[0][0] == this.matrix[1][0])&&(this.matrix[1][0] == this.matrix[2][0])&&(this.matrix[2][0] != null)){
										return this.matrix[0][0];
								}
								if((this.matrix[0][1] == this.matrix[1][1])&&(this.matrix[1][1] == this.matrix[2][1])&&(this.matrix[2][1] != null)){
										return this.matrix[0][1];
								}
								if((this.matrix[0][2] == this.matrix[1][2])&&(this.matrix[1][2] == this.matrix[2][2])&&(this.matrix[2][2] != null)){
										return this.matrix[0][2];
								}
								if((this.matrix[0][0] == this.matrix[1][1])&&(this.matrix[1][1] == this.matrix[2][2])&&(this.matrix[2][2] != null)){
										return this.matrix[0][0];
								}
								if((this.matrix[2][0] == this.matrix[1][1])&&(this.matrix[1][1] == this.matrix[0][2])&&(this.matrix[0][2] != null)){
									  return this.matrix[2][0];
								}
								return null;
    }

    noMoreTurns() {
						return (this.counter == 9);
    }

    isDraw() {
					return (this.noMoreTurns() && !(this.getWinner()));
    }

    getFieldValue(rowIndex, colIndex) {
						return this.matrix[rowIndex][ colIndex];
    }
}

module.exports = TicTacToe;
