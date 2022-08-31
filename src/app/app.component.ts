import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe-ng';

  matrix = Array(9).fill('');

  isCrossTurn = false;

  updateIndex(index: number) {
    this.matrix[index] = this.isCrossTurn ? 'X' : 'C';
    this.isCrossTurn = !this.isCrossTurn;
  }
}
