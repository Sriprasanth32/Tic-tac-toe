import { Component,ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ResultdialogComponent } from './resultdialog/resultdialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  title = 'tic-tac-toe';
  currentPlayer:string='X';
  winner:string|null=null;
  draw:boolean=false;
  board:string[]=Array(9).fill('');
  
  makeMove(index:number):void{
    if(this.board[index]!=''|| this.winner || this.draw){
      return;
    }
    this.board[index]=this.currentPlayer;
    this.checkWin();
    this.playerSwitch();
    if (this.winner || this.draw) {
      this.openResultDialog();
    }
  }
  playerSwitch(){
    this.currentPlayer=this.currentPlayer==='X'?'O':'X';
  }
  checkWin(){
    const winningCombination=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let combo of winningCombination){
      const [a,b,c]=combo;
      if(this.board[a]!=='' && this.board[a]===this.board[b] && this.board[b] === this.board[c]){
        this.winner=this.board[a];
        
        return;
      }
    }
    if(!this.board.includes('')){
      this.draw=true;
    }
  }
  reset() {
    this.currentPlayer = 'X';
    this.winner = null;
    this.draw= false;
    this.board = Array(9).fill('');
  }
  openResultDialog(): void {
    let message: string='';
    if (this.winner) {
      message = `Player ${this.winner} wins!`;
    } else if (this.draw) {
      message = "It's a draw!";
    }
  
    this.dialog.open(ResultdialogComponent, {
      data: { message },
    });
  }
}
