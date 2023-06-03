import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resultdialog',
  templateUrl: './resultdialog.component.html',
  styleUrls: ['./resultdialog.component.css']
})
export class ResultdialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

}
