import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-matrix-block',
  templateUrl: './matrix-block.component.html',
  styleUrls: ['./matrix-block.component.css'],
})
export class MatrixBlockComponent implements OnInit {
  @Input()
  ele!: string;

  @Input()
  index!: number;

  @Input()
  isWinnerBlock: boolean|undefined = false;

  @Output() eleIndexEvent = new EventEmitter<number>();

  selectedByCross: boolean = false;
  selectedByCircle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  selectBlock() {
    if (!this.ele) {
      this.eleIndexEvent.emit(this.index);
      return;
    }
    console.log('already taken');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ele'] && changes['ele'].currentValue === 'X') {
      this.selectedByCross = true;
    }
    if (changes['ele'] && changes['ele'].currentValue === 'O') {
      this.selectedByCircle = true;
    }
  }
}
