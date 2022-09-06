import { Injectable } from '@angular/core';
import { Winner } from './model/winner';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  checkWinner(matrix: string[]): Winner | undefined{
    if (matrix[4]) {
      if (matrix[0] === matrix[4] && matrix[8] === matrix[0])
        return { winnerTeam: matrix[4], winnerBlocks: [0, 4, 8] };
      if (matrix[1] === matrix[4] && matrix[7] === matrix[1])
        return { winnerTeam: matrix[4], winnerBlocks: [1, 4, 7] };
      if (matrix[2] === matrix[4] && matrix[6] === matrix[2])
        return { winnerTeam: matrix[4], winnerBlocks: [2, 4, 6] };
      if (matrix[3] === matrix[4] && matrix[5] === matrix[3])
        return { winnerTeam: matrix[4], winnerBlocks: [3, 4, 5] };
    }
    if (matrix[0]) {
      if (matrix[0] === matrix[1] && matrix[1] === matrix[2])
        return { winnerTeam: matrix[0], winnerBlocks: [0, 1, 2] };
      if (matrix[0] === matrix[3] && matrix[3] === matrix[6])
        return { winnerTeam: matrix[4], winnerBlocks: [0, 3, 6] };
    }

    if (matrix[8]) {
      if (matrix[8] === matrix[5] && matrix[5] === matrix[2])
        return { winnerTeam: matrix[8], winnerBlocks: [2, 5, 8] };
      if (matrix[8] === matrix[7] && matrix[7] === matrix[6])
        return { winnerTeam: matrix[8], winnerBlocks: [6, 7, 8] };
    }

    return undefined;
  }
}
