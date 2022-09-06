import { Component } from '@angular/core';
import { GameLogicService } from './game-logic.service';
import { Winner } from './model/winner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe-ng';

  matrix = Array(9).fill('');

  isCrossTurn = false;

  winner: Winner|undefined;
  successMsg: string = '';
  errorMsg : string = '' 

  constructor(private gameLogic: GameLogicService) {}

  updateIndex(index: number) {
    if(this.winner){
      if(confirm('New game?')){
        this.resetGame();
      }
      return;
    }

    this.matrix[index] = this.isCrossTurn ? 'X' : 'O';
    this.isCrossTurn = !this.isCrossTurn;

    this.winner = this.gameLogic.checkWinner(this.matrix)
    if(!this.winner){
      return;
    }else if(this.winner.winnerTeam === 'X'){
      this.successMsg = 'Cross won!!';
    }else if(this.winner.winnerTeam === 'O'){
      this.successMsg = 'Circle won!!'
    }
  }

  resetGame() {
    this.successMsg = '';
    this.errorMsg = '';
    this.winner = undefined;
    this.matrix.fill('');
    this.isCrossTurn = false;
  }
}
